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
    SET_ZONE,
    STORAGE_TOKEN,
    SET_USER_TYPE

  } from "../../store.js";
  import {
    TERMS,
    ZONES
  } from "../../utilis/actions.js";

  export let title;
  let token = null;
  let terms = [];
  let zones = [];
  let userType = null;
  let all_zones = {
    zone_id: 'all',
    name: "All Zones"
  };
  let selectedTerm = null;
  let selectedZone = null;

  onMount(() => {


    const ls = JSON.parse(localStorage.getItem("token"));
    const user_type = JSON.parse(localStorage.getItem("currentUser"));
    userType = user_type ? user_type.user.zone : null;
    if (!ls) {
      window.location.replace('/');
    }
    token = ls.token;
    STORAGE_TOKEN.set(token);
    SET_USER_TYPE.set(user_type.user.zone);
    getTerms();
    getZones();
    loadCheckers();

    SET_ZONE.set(zones);

  })


  $: if (selectedTerm) {
    SET_TERM.set(selectedTerm);
  }

  $: if (selectedZone) {
    SET_ZONE.set(selectedZone);
  }




  const getTerms = () => {
    const callback = res => {
      SET_TERM.set(res);
      terms = res;

    }

    const onError = err => {
      console.error(err);
    }

    TERMS(callback, onError);

  }

  const getZones = () => {
    const callback = res => {
      zones = res;

    }

    const onError = err => {
      console.error(err);
    }

    ZONES(callback, onError);
  }

  function loadCheckers() {
    let checkTerm = JSON.parse(localStorage.getItem('selectedTerm'));
    SET_TERM.set(checkTerm);

    if (checkTerm) {
      let term_id = checkTerm.term_id;
      selectedTerm = checkTerm;

      setTimeout(() => {
        jQuery(`#term-${term_id}`).prop('checked', true); //add check mark
      }, 1000)

    }

    let checkZone = JSON.parse(localStorage.getItem('selectedZone'));

    SET_ZONE.set(checkZone);

    if (checkZone) {
      let zone_id = checkZone.zone.zone_id;
      selectedZone = checkZone.zone;

      setTimeout(() => {
        jQuery(`#zone-${zone_id}`).prop('checked', true); //add check mark
      }, 1000)

    }
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

  function changeZone(zone) {

    let checkZone = JSON.parse(localStorage.getItem('selectedZone'));

    selectedZone = zone;
    SET_ZONE.set(selectedZone);



    if (checkZone) {
      jQuery(`#zone-${checkZone.zone_id}`).prop('checked', false); //remove check mark
      jQuery(`#zone-${checkZone.zone_id}`).prop('checked', true); // add check mark

      localStorage.removeItem('selectedZone')
      localStorage.selectedZone = JSON.stringify({
        zone
      })
    } else {
      jQuery(`#zone-${zone.zone_id}`).prop('checked', true);

      localStorage.selectedZone = JSON.stringify({
        zone
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

        {#if userType === 'Central User'}
        <div class="dropdown dropdown-b" style="margin-right: 10px">
          <a href={null} class="header-notification" data-toggle="dropdown">
            {selectedZone != null ? `${selectedZone.name}` : 'Zone'}
          </a>
          <div class="dropdown-menu">
            <div class="dropdown-menu-header">
              <h6 class="dropdown-menu-title">Select Zone</h6>
              <div>
                <!-- <a href={null} on:click|once={()=> selectAll() }>Select All Terms</a> -->
                <!-- <a href={null}>Settings</a> -->
              </div>
            </div>
            <!-- dropdown-menu-header -->
            <div class="dropdown-list">
              <a href={null} class="dropdown-link">

                <div class="media">
                     <input 
                       type="radio"
                       name="zone" 
                       value="{all_zones}" 
                       id="zone-all" 
                       on:click={() => changeZone(all_zones) }
                      />
                  <div class="media-body">
                   <li on:click={() => changeZone(all_zones) } style="cursor: pointer;">ALL ZONES </li> 
                  </div>
                </div><!-- media -->


                
                   
                  
         
              {#each zones as zone}
              <!-- loop starts here -->
                <div class="media">
                    <input  type="radio" name="zone" value="{zone}" id="zone-{zone.zone_id}" on:click={() => changeZone(zone) }>

                  <div class="media-body">
                    <li on:click={() => changeZone(zone) } style="cursor: pointer;">{zone.name} </li>
                  
                  </div>
                </div><!-- media -->
                
                
            {/each}
              </a>

              <!-- <div class="dropdown-list-footer">
                  <a href="page-notifications.html"><i class="fa fa-angle-down"></i> Show All Notifications</a>
                </div> -->
            </div><!-- dropdown-list -->
          </div><!-- dropdown-menu-right -->
        </div> 
        <!-- dropdown -->

      {/if}

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
              <input  type="radio" name="term" value="{term}" id="term-{term.id}" on:click={() => changeTerm(term) }>

                  <div class="media-body">
                    <li on:click={() => changeTerm(term) } style="cursor: pointer;">Term {term.name} of {term.session}</li>
                  
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
              <!-- <a href="page-profile.html" class="nav-link"><i class="icon ion-person"></i> View Profile</a>
              <a href="page-edit-profile.html" class="nav-link"><i class="icon ion-compose"></i> Edit Profile</a>
              <a href="page-activity.html" class="nav-link"><i class="icon ion-ios-bolt"></i> Activity Log</a>
              <a href="page-settings.html" class="nav-link"><i class="icon ion-ios-gear"></i> Account Settings</a> -->
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
           {#if userType === 'Central User'}
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
        {/if}
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
        <!-- <li class="nav-item">
          <a class="nav-link" href={$url('/app/import-payments/')}>
            <i class="icon ion-ios-chatboxes-outline"></i>
            <span>Import Payments</span>
            <span class="square-8"></span>
          </a>
        </li> -->

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