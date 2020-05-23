<script>
    import {
        onMount
    } from "svelte";
    import {
        GET_ZONAL_DASHBOARD_BY_ID,
        CHANGE_TOKEN
    } from "../../../../../utilis/actions.js";
    import {
        STORAGE_TOKEN
    } from "../../../../../store.js";
    import numeral from 'numeral'



    let dashboard = [];
    let token = null;

    export let slug;

    $: if (slug) {
        getDashboard();
    }




    onMount(() => {
        STORAGE_TOKEN.subscribe(value => token = value);
        getDashboard();
    })

    function getDashboard() {


        const callback = res => {
            dashboard = res.data[0];
            CHANGE_TOKEN(res.token)

            return false;

        }

        const onError = err => {
            console.error(err);
        }


        GET_ZONAL_DASHBOARD_BY_ID(slug.id, token, callback, onError);
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

<main>


    <div class="slim-mainpanel">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item"><a href={null}>Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Zonal Dashboard</li>
                </ol>
                <h6 class="slim-pagetitle">Dashboard {slug.name}</h6>
            </div><!-- slim-pageheader -->

            <div class="row row-xs">
                <div class="col-sm-6 col-lg-3">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_fees ?  numeral(dashboard.total_fees).format('0,0')  : '0.00' }</h1>
                                <p>Total Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? numeral(dashboard.total_paid).format('0,0')    : '0.00' }</h1>
                                <p>Paid Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_owing ? numeral(dashboard.total_owing).format('0,0')  : '0.00' } </h1>
                                <p>Total Number of Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? numeral(dashboard.total_paid).format('0,0')  : '0.00' } </h1>
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
                                <h1>₦ {dashboard.total_paid ? numeral(dashboard.total_paid).format('0,0')  : '0.00' }</h1>
                                <p>Partly Paid Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? numeral(dashboard.total_paid ).format('0,0') : '0.00' }</h1>
                                <p>Owing Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? numeral( dashboard.total_paid).format('0,0') : '0.00' } </h1>
                                <p>Owed Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ {dashboard.total_paid ? numeral(dashboard.total_paid).format('0,0')  : '0.00' } </h1>
                                <p>Total Number of Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
            </div><!-- row -->


        </div><!-- container -->
    </div><!-- slim-mainpanel -->




</main>