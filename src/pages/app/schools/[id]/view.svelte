<script>
  import {
    onMount
  } from "svelte";
  import {
    GET_SCHOOL_BY_ID,
    SINGLE_SCHOOL_PAYMENT_DASHBOARD

  } from "../../../../utilis/actions.js";
  import {
    STORAGE_TOKEN
  } from "../../../../store.js";
  import {
    goto,
    url
  } from "@sveltech/routify";
  import numeral from 'numeral';


  export let slug;


  let isLoading = true;
  let token = null;
  let school = [];
  let payment_dashboard = [];




  onMount(() => {
    STORAGE_TOKEN.subscribe(value => token = value);
    getSchool();
    getDashboard();

  })



  function getSchool() {
    const callback = res => {
      school = res;
    }

    const onError = err => {
      isLoading = false;

      console.log(err);

      $goto('/app/not-found');

    }

    GET_SCHOOL_BY_ID(slug.id, callback, onError);
  }

  function getDashboard() {
    const callback = res => {
      payment_dashboard = res[0];;

      setTimeout(() => {
        isLoading = false;
      }, 100)
    }

    const onError = err => {
      isLoading = false;

      console.log(err);

    }

    SINGLE_SCHOOL_PAYMENT_DASHBOARD(slug.id, callback, onError);
  }
</script>


<svelte:head>
  <title>School - {school ? school.schoolname : ''}</title>
</svelte:head>



{#if isLoading}
<div class="loader">
  <div class="bubble-1"></div>
  <div class="bubble-2"></div>
</div>


{:else}

<main>

  <div class="slim-mainpanel">
    <div class="container">
      <div class="slim-pageheader">
        <ol class="breadcrumb slim-breadcrumb">
          <li class="breadcrumb-item">
            <a href='/'>Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href='/payments/all-schools'>School</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{school.schoolname}</li>
        </ol>
        <h6 class="slim-pagetitle">{school.schoolname}</h6>
      </div><!-- slim-pageheader -->


      <div class="row row-xs">

        <div class="col-sm-6 col-lg-4">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>Amount Expected </p>
                <h1>₦ {numeral(payment_dashboard.total_fees).format('0,0') }</h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->

        <div class="col-sm-6 col-lg-4">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>Total Paid</p>
                <h1>₦ {numeral(payment_dashboard.total_paid).format('0,0')}</h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->

        <div class="col-sm-6 col-lg-4">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>Total Owing </p>
                <h1>₦ {numeral(payment_dashboard.total_owing).format('0,0')}</h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->



      </div><!-- row -->

      <div class="row row-xs my-3">

        <div class="col-sm-6 col-lg-4">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>Fully Paid </p>
                <h1>₦ {numeral(payment_dashboard.fully_paid_sum).format('0,0')} </h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->



        <div class="col-sm-6 col-lg-4">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>Partly Paid </p>
                <h1>₦ {numeral(payment_dashboard.partly_paid_sum).format('0,0')} </h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->


        <div class="col-sm-6 col-lg-4">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>Not Paid </p>
                <h1>₦ {numeral(payment_dashboard.not_paid_sum).format('0,0')}  </h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->




      </div><!-- row -->
      <div class="row row-xs my-3">

        <div class="col-sm-6 col-lg-3">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>This Term's Income </p>
                <h1>₦ {numeral(payment_dashboard.fully_paid_sum).format('0,0')} </h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->

        <div class="col-sm-6 col-lg-3">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>This Month's Income </p>
                <h1>₦ {numeral(payment_dashboard.fully_paid_sum).format('0,0')} </h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->

        <div class="col-sm-6 col-lg-3">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>This Week's Income </p>
                <h1>₦ {numeral(payment_dashboard.fully_paid_sum).format('0,0')} </h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->

        <div class="col-sm-6 col-lg-3">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <p>Today's Income </p>
                <h1>₦ {numeral(payment_dashboard.fully_paid_sum).format('0,0')}  </h1>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->




      </div><!-- row -->


      <div class="row row-xs my-2">

        <div class="col-sm-6 col-lg-6">
          <div class="card card-status">
            <div class="media">

              <div class="media-body">
                <h5>School Info</h5>
                <ul>
                  <li>
                    <p>Name: {school.schoolname}</p>
                  </li>
                  <li>
                    <p>Address: None</p>
                  </li>
                  <li>
                    <p>Total Students: 0</p>
                  </li>
                </ul>

              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->

        <div class="col-sm-6 col-lg-6">
          <div class="card card-status">
            <div class="media">

              <div class="media-body py-3">
                <h5>Other Information</h5>

                <a href={$url(`/app/schools/payments/${slug.id}`)} class="btn btn-info">View Payment</a>
                <a href={$url(`/app/schools/fees-information/${slug.id}`)} class="btn btn-success">View Fees Information</a>
              </div><!-- media-body -->
            </div><!-- media -->
          </div><!-- card -->
        </div><!-- col-3 -->


      </div><!-- row -->





    </div><!-- container -->
  </div><!-- slim-mainpanel -->
</main>

{/if}