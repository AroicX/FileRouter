<script>
    import {
        onMount
    } from "svelte";




    onMount(() => {

        jQuery(document).ready(function ($) {

            $('#allschools').DataTable({
                responsive: true,
                language: {
                    searchPlaceholder: 'Search...',
                    sSearch: '',
                    lengthMenu: '_MENU_ items/page',
                }
            });


        });

    })
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
                    <li class="breadcrumb-item active" aria-current="page">Past Month</li>
                </ol>
                <h6 class="slim-pagetitle">Past Month </h6>
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