<script>
    import {
        onMount
    } from "svelte";
    import {
        DASHBOARD,
        CHANGE_TOKEN
    } from "../../utilis/actions.js";
    import Loader from "../../components/Loader.svelte";
    import {
        SET_TERM,
        STORAGE_TOKEN
    } from "../../store.js";


    let dashboard = [];
    let isLoading = true;
    let token = null;
    let term = [];




    onMount(() => {
        STORAGE_TOKEN.subscribe(value => token = value);
        // SET_TERM.subscribe(value => term = value);
        getDashboard();
    })

    function getDashboard() {
        isLoading = true;

        let getTerm = JSON.parse(localStorage.getItem('selectedTerm'));
        //    console.table(getTerm);

        const callback = res => {
            dashboard = res.data[0];
            CHANGE_TOKEN(res.token)

            setTimeout(() => {
                isLoading = false;
            }, 1000)
        }

        const onError = err => {
            console.error(err);
        }

        DASHBOARD(getTerm.term_id, token, callback, onError);
    }
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<style>
    h1,
    .h1 {
        font-size: 1.5rem;
    }
</style>




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
                    <li class="breadcrumb-item"><a href={null}>Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
                <h6 class="slim-pagetitle">Welcome back, Katherine</h6>
            </div><!-- slim-pageheader -->

            <div class="row row-xs">
                <div class="col-sm-6 col-lg-3">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_fees ? dashboard.total_fees : '0.00' }</h1>
                                <p>Total Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' }</h1>
                                <p>Paid Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_owing ? dashboard.total_owing : '0.00' } </h1>
                                <p>Total Number of Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' } </h1>
                                <p>Fully Paid Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
            </div><!-- row -->

            <div class="row row-xs py-5">
                <div class="col-sm-6 col-lg-3">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' }</h1>
                                <p>Partly Paid Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' }</h1>
                                <p>Owing Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' } </h1>
                                <p>Owed Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' } </h1>
                                <p>Total Number of Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
            </div><!-- row -->


        </div><!-- container -->
    </div><!-- slim-mainpanel -->




</main>

{/if}