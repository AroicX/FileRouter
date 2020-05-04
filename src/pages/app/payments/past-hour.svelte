<script>
    import {
        onMount
    } from "svelte";

    import {
        STORAGE_TOKEN
    } from "../../../store.js";


    import {
        PAYMENT_ALL_SCHOOLS
    } from "../../../utilis/actions.js";

    let token = null;
    let payments = [];


    import Loader from "../../../components/Loader.svelte";


    onMount(() => {
        STORAGE_TOKEN.subscribe(value => token = value);
        getPaymentsAll();

    })



    function init() {

        jQuery(document).ready(function ($) {

            $('#all-payment').DataTable({
                responsive: true,
                language: {
                    searchPlaceholder: 'Search...',
                    sSearch: '',
                    lengthMenu: '_MENU_ items/page',
                }
            });


        });

    }

    function getPaymentsAll() {

        

        const callback = res => {

            payments = res.data;

            setTimeout(() => {
                init();
            }, 2000)

        }

        const onError = err => {
            console.error(err);
        }

        PAYMENT_ALL_SCHOOLS(token, callback, onError);
    }
</script>

<main >

    <!-- <Loader status={true} /> -->

    <div class="slim-mainpanel">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href='/'>Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href='/payments/all-schools'>Payment</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Past Hour</li>
                </ol>
                <h6 class="slim-pagetitle">Past Hour </h6>
            </div><!-- slim-pageheader -->

            <div class="section-wrapper">


                <div class="table-wrapper">
                    <table id="allschools" class="table display responsive nowrap">
                        <thead>
                            <tr>
                                <th class="wd-15p">First name</th>
                                <th class="wd-15p">Last name</th>
                                <th class="wd-20p">Position</th>
                                <th class="wd-15p">Start date</th>
                                <th class="wd-10p">Salary</th>
                                <th class="wd-5p">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                            <tr>
                                <td>Tiger</td>
                                <td>Nixon</td>
                                <td>System Architect</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td> <button class="btn btn-info">View</button> </td>
                            </tr>

                        </tbody>
                    </table>
                </div><!-- table-wrapper -->
            </div><!-- section-wrapper -->

        </div><!-- container -->
    </div><!-- slim-mainpanel -->



</main>