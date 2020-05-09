<script>
   

    // import Loader from "../../../components/Loader.svelte";
</script>

<svelte:head>
    <title>Reversals</title>
</svelte:head>

<main>
    <style>
        .hide {
            display: none !important;
            visibility: none !important;
        }

        .section-wrapper{
            height: 5vh auto !important;
        }
    </style>
    <!-- <Loader status={true} /> -->

    <div class="slim-mainpanel">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href={null}>Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Reversals</li>
                </ol>
                <h6 class="slim-pagetitle">Reversals</h6>
            </div><!-- slim-pageheader -->


            <div class="row">
                <div class="col-md-4">
                    <div class="section-wrapper">
                        <div class="form-layout">
                            <div class="row mg-b-25">

                                <div class="col-lg-12">
                                    <div class="form-group mg-b-10-force">
                                        <label class="form-control-label">Reversals ID: <span
                                                class="tx-danger">*</span></label>
                                        <input class="form-control" type="text" name="address" value=""
                                            placeholder="A2C32131412">
                                    </div>
                                </div><!-- col-8 -->


                                <div class="col-lg-8">
                                    <button class="btn btn-primary bd-0">Submit </button>
                                </div>
                            </div><!-- form-layout-footer -->
                        </div><!-- form-layout -->
                    </div><!-- section-wrapper -->
                </div>

                <div class="col-md-8">

                    <div class="section-wrapper hide">
                        <label class="section-title">Blog List</label>
                        <p class="mg-b-20 mg-sm-b-40">A blog list widget for managing blog content.</p>

                        <div class="row">
                            <div class="col-md-12 col-lg-12">
                                <div class="list-group">
                                    <div class="list-group-item d-block pd-y-20">
                                        <div class="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                                            <a href={null} class="tx-info">Mildred J. Reulet</a>
                                            <span>April 21, 2017</span>
                                        </div><!-- d-flex -->
                                        <h6 class="lh-3 mg-b-10"><a href={null} class="tx-inverse hover-primary">Skip
                                                the
                                                Boring Business Plan. Focus on This Strategy Instead</a></h6>
                                        <p class="tx-13 mg-b-0">It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at its layout.
                                        </p>
                                    </div><!-- list-group-item -->
                                    <div class="list-group-item d-block pd-y-20">
                                        <div class="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                                            <a href={null} class="tx-info">Randall A. Wells</a>
                                            <span>April 22, 2017</span>
                                        </div><!-- d-flex -->
                                        <h6 class="lh-3 mg-b-10"><a href={null} class="tx-inverse hover-primary">How I
                                                Built
                                                a Startup While Traveling to 20 Countries</a></h6>
                                        <p class="tx-13 mg-b-0">It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at its layout.
                                        </p>
                                    </div><!-- list-group-item -->
                                    <div class="list-group-item d-block pd-y-20">
                                        <div class="d-flex justify-content-between align-items-center tx-12 mg-b-10">
                                            <a href={null} class="tx-info">Reynante Labares</a>
                                            <span>April 23, 2017</span>
                                        </div><!-- d-flex -->
                                        <h6 class="lh-3 mg-b-10"><a href={null} class="tx-inverse hover-primary">A
                                                Counterintuitive System for Startup Compensation</a></h6>
                                        <p class="tx-13 mg-b-0">It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at its layout.
                                        </p>
                                    </div><!-- list-group-item -->
                                </div><!-- list-group -->
                            </div><!-- col-6 -->
                        </div><!-- row -->
                    </div>

                </div>
            </div>





        </div><!-- container -->
    </div><!-- slim-mainpanel -->





</main>