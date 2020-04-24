<script>
    import {
        onMount
    } from "svelte";
    import {
        DASHBOARD
    } from "../../utilis/actions.js";
    import Loader from "../../components/Loader.svelte";


    let dashboard = [];
    let isLoading = null;





    onMount(() => {
        getDashboard();
    })

    function getDashboard() {
        isLoading = true;
        const ls = JSON.parse(localStorage.getItem("currentUser"));

        const callback = res => {
            isLoading = false;
            dashboard = res.data[0];
        }

        const onError = err => {
            console.error(err);
        }

        DASHBOARD(ls.token, callback, onError);
    }
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>



<main>
    <Loader status={isLoading} />

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
                                <h1>₦ {dashboard.total_fees}</h1>
                                <p>Total Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ 0.00</h1>
                                <p>Paid Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ 0.00 </h1>
                                <p>Owed Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ 0.00 </h1>
                                <p>Total Number of Students</p>
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
                                <h1>₦ 0.00</h1>
                                <p>Total Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ 0.00</h1>
                                <p>Paid Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ 0.00 </h1>
                                <p>Owed Fees</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
                    <div class="card card-status">
                        <div class="media">

                            <div class="media-body">
                                <h1>₦ 0.00 </h1>
                                <p>Total Number of Students</p>
                            </div><!-- media-body -->
                        </div><!-- media -->
                    </div><!-- card -->
                </div><!-- col-3 -->
            </div><!-- row -->


        </div><!-- container -->
    </div><!-- slim-mainpanel -->




</main>