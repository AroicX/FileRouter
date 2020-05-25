<script>
    import {
        onMount
    } from "svelte";
    import {
        DASHBOARD
    } from "../../utilis/actions.js";
    import Loader from "../../components/Loader.svelte";
    import {
        SET_TERM,
        STORAGE_TOKEN
    } from "../../store.js";

    import numeral from 'numeral'


    let dashboard = null;
    let isLoading = true;
    let token = null;
    let term = [];
    let user = [];
    let terms = [];




    onMount(() => {
        const userData = JSON.parse(localStorage.getItem("currentUser"));
        user = userData;

        STORAGE_TOKEN.subscribe(value => token = value);
        SET_TERM.subscribe(value => terms = value);
        getDashboard();

    })

    function getDashboard() {
        let getTerm = JSON.parse(localStorage.getItem('selectedTerm'));

        const callback = res => {
            if (dashboard === null) {
                dashboard = res[0];
                setTimeout(() => {
                    isLoading = false;
                }, 100)
            }
        }

        const onError = err => {
            console.error(err);
        }

        DASHBOARD(getTerm.term_id, callback, onError);
    }

    $: if (terms) {
        isLoading = true;
        dashboard = null;
        let getTerm = JSON.parse(localStorage.getItem('selectedTerm'));
        setTimeout(() => {if (getTerm.term_id === terms.term_id) { getDashboard() }}, 100)

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




{#if isLoading && dashboard === null}
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
                <h6 class="slim-pagetitle">Welcome back, {user.user.name}</h6>
            </div><!-- slim-pageheader -->

            <div class="row row-xs">
                <div class="col-sm-6 col-lg-3">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_fees ? numeral(dashboard.total_fees).format('0,0') : '0.00' }</h1>
                                <p>Total Expected Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' }</h1>
                                <p>Total Paid Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->

                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? dashboard.total_paid : '0.00' } </h1>
                                <p>Total Owing Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->

                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1> {dashboard.total_paid ? dashboard.total_paid : '0' } </h1>
                                <p>Total Number of Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->


            </div><!-- row -->

            <div class="row row-xs py-5">


                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1> {dashboard.total_paid ? dashboard.total_owing : '0' } </h1>
                                <p>Total Owing Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>{dashboard.total_paid ? dashboard.total_paid : '0' } </h1>
                                <p>Fully Paid Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->


                <div class="col-sm-6 col-lg-3">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1> {dashboard.total_paid ? dashboard.total_paid : '0' }</h1>
                                <p>Partly Paid Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->

               
            </div><!-- row -->


        </div><!-- container -->
    </div><!-- slim-mainpanel -->




</main>

{/if}