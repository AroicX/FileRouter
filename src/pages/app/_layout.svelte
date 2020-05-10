<script>
  import {
    url,
    goto
  } from "@sveltech/routify";


  import {
    onMount
  } from "svelte";
  import {
    SET_TERM,
    STORAGE_TOKEN
  } from "../../store.js";
  import {
    TERMS,
    CHANGE_TOKEN,
    ZONES
  } from "../../utilis/actions.js";

  export let title;
  let token = null;
  let terms = [];
  let zones = [];
  let selectedTerm = null;

  onMount(() => {


    const isLoggedIn = JSON.parse(localStorage.getItem("currentUser"));

    // if (!isLoggedIn) {
    //   $goto('/')
    // }



    const ls = JSON.parse(localStorage.getItem("token"));
    token = ls.token;
    STORAGE_TOKEN.set(token);
    getTerms();
    getZones();

    let checkTerm = JSON.parse(localStorage.getItem('selectedTerm'));
    SET_TERM.set(checkTerm);

    if (checkTerm) {
      let term_id = checkTerm.term_id;
      selectedTerm = checkTerm;

      setTimeout(() => {
        jQuery(`#term-${term_id}`).prop('checked', true); //add check mark
      }, 1000)

    }

  })


  $: if (selectedTerm) {
    //  console.log('Term',selectedTerm)
  }




  const getTerms = () => {
    const callback = res => {
      SET_TERM.set(res.data);
      terms = res.data;
      CHANGE_TOKEN(res.token);
    }

    const onError = err => {
      console.error(err);
    }

    TERMS(token, callback, onError);

  }

  const getZones = () =>{
    const callback = res => {
      zones = res.data;
      CHANGE_TOKEN(res.token);
    }

    const onError = err => {
      console.error(err);
    }

    ZONES(token, callback, onError);
  }

  function changeTerm(term) {

    let term_id = term.id;
    let checkTerm = JSON.parse(localStorage.getItem('selectedTerm'));

    selectedTerm = {
      term_id: term_id,
      term_data: term
    };

      SET_TERM.set(selectedTerm);



    if (checkTerm) {
      jQuery(`#term-${checkTerm.term_id}`).prop('checked', false); //remove check mark
      jQuery(`#term-${term_id}`).prop('checked', true); // add check mark

      localStorage.removeItem('selectedTerm')
      localStorage.selectedTerm = JSON.stringify({
        term_id: term_id,
        term_data: term
      })
    } else {
      jQuery(`#term-${term_id}`).prop('checked', true);

      localStorage.selectedTerm = JSON.stringify({
        term_id: term_id,
        term_data: term
      })


    }
  }


  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    $goto('/');
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>

  <div class="slim-header">
    <div class="container">
      <div class="slim-header-left">
        <h2 class="slim-logo"><a href="/">School<span>mo</span></a></h2>


      </div><!-- slim-header-left -->
      <div class="slim-header-right">

        <div class="dropdown dropdown-b">
          <a href={null} class="header-notification" data-toggle="dropdown">
            {selectedTerm != null ? `Term ${selectedTerm.term_data.name} of ${selectedTerm.term_data.session}` : 'Term'}
          </a>
          <div class="dropdown-menu">
            <div class="dropdown-menu-header">
              <h6 class="dropdown-menu-title">Select Term</h6>
              <div>
                <!-- <a href={null} on:click|once={()=> selectAll() }>Select All Terms</a> -->
                <!-- <a href={null}>Settings</a> -->
              </div>
            </div>
            <!-- dropdown-menu-header -->
            <div class="dropdown-list">
              {#each terms as term}
              <!-- loop starts here -->
              <a href={null} class="dropdown-link">
                <div class="media">
              <input  type="radio" name="term" value="{term}" id="term-{term.id}" on:click|once={() => changeTerm(term) }>

                  <div class="media-body">
                    <li >Term {term.name} of {term.session}</li>
                  
                  </div>
                </div><!-- media -->
              </a>
            {/each}

              <!-- <div class="dropdown-list-footer">
                  <a href="page-notifications.html"><i class="fa fa-angle-down"></i> Show All Notifications</a>
                </div> -->
            </div><!-- dropdown-list -->
          </div><!-- dropdown-menu-right -->
        </div><!-- dropdown -->
        <div class="dropdown dropdown-c">
          <a href={null} class="logged-user" data-toggle="dropdown">
            <img src="http://via.placeholder.com/500x500" alt="">
            <span>School</span>
            <i class="fa fa-angle-down"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <nav class="nav">
              <a href="page-profile.html" class="nav-link"><i class="icon ion-person"></i> View Profile</a>
              <a href="page-edit-profile.html" class="nav-link"><i class="icon ion-compose"></i> Edit Profile</a>
              <a href="page-activity.html" class="nav-link"><i class="icon ion-ios-bolt"></i> Activity Log</a>
              <a href="page-settings.html" class="nav-link"><i class="icon ion-ios-gear"></i> Account Settings</a>
              <a href={null} class="nav-link" on:click|once={() => signOut() }><i class="icon ion-forward"></i> Sign Out</a>
            </nav>
          </div><!-- dropdown-menu -->
        </div><!-- dropdown -->
      </div><!-- header-right -->
    </div><!-- container -->
  </div><!-- slim-header -->

  <div class="slim-navbar">
    <div class="container">
      <ul class="nav">
        <li class="nav-item active">
          <a class="nav-link" href={$url('/app/')}>
            <i class="icon ion-ios-home-outline"></i>
            <span>Dashboard</span>
          </a>

        </li>
         <li class="nav-item with-sub">
          <a class="nav-link" href={null}>
            <i class="icon ion-ios-location-outline"></i>
            <span>Zones</span>
          </a>
          <div class="sub-item">
            <ul>
            {#each zones as zone}
              <li><a href={$url(`/app/zones/dashboard/${zone.zone_id}`,{name: zone.name })}>{zone.name}</a></li>
            {/each}

            </ul>
          </div><!-- dropdown-menu -->
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="/app/schools/">
            <i class="icon ion-ios-filing-outline"></i>
            <span>Schools </span>
          </a>

        </li>
        <li class="nav-item with-sub">
          <a class="nav-link" href={null}>
            <i class="icon ion-ios-book-outline"></i>
            <span>Payments</span>
          </a>
          <div class="sub-item">
            <ul>
              <li><a href={$url('/app/payments/all-schools')}>All</a></li>
              <li><a href={$url('/app/payments/past-hour')}>Past Hour</a></li>
              <li><a href={$url('/app/payments/past-day')}>Past Day</a></li>
              <li><a href={$url('/app/payments/past-week')}>Past Week</a></li>
              <li><a href={$url('/app/payments/past-month')}>Past Month</a></li>


            </ul>
          </div><!-- dropdown-menu -->
        </li>
        <li class="nav-item">
          <a class="nav-link" href={$url('/app/reversals/')}>
            <i class="icon ion-ios-gear-outline"></i>
            <span>Reversals</span>
          </a>

        </li>
        <li class="nav-item">
          <a class="nav-link" href={$url('/app/import-payments/')}>
            <i class="icon ion-ios-chatboxes-outline"></i>
            <span>Import Payments</span>
            <span class="square-8"></span>
          </a>
        </li>

      </ul>
    </div><!-- container -->
  </div><!-- slim-navbar -->


  {#if selectedTerm != null}

  <article>

    <slot />
  </article> 
  {:else}
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 my-5 px-5 align-items-center">
         <h2> Please Select a term To Contiune</h2>
         <img class="img-responsive" src="/img/select.png" alt="select" style="height: 40vh;" >
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>

  {/if}


</main>