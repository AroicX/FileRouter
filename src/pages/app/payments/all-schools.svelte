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
                },
                 dom: 'Bfrtip',
                lengthMenu: [
                    [10, 25, 50, -1],
                    ['10 rows', '25 rows', '50 rows', 'Show all']
                ],
                buttons: [
                    'pageLength',
                    'copyHtml5',
                    'excelHtml5',
                    'csvHtml5',
                    'pdfHtml5',
                ]
            });


        });

    }

    function getPaymentsAll() {

        

        const callback = res => {

            payments = res.data;
            init();
        

        }

        const onError = err => {
            console.error(err);
        }

        PAYMENT_ALL_SCHOOLS(token, callback, onError);
    }
</script>

<svelte:head>
    <title>Payment All Schools</title>
</svelte:head>
<main>

    <Loader status={true} />

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
                    <li class="breadcrumb-item active" aria-current="page">All Schools</li>
                </ol>
                <h6 class="slim-pagetitle">All Schools </h6>
            </div><!-- slim-pageheader -->

            <div class="section-wrapper">


                <div class="table-wrapper">
                    <table id="all-payment" class="table display responsive nowrap">
                        <thead>
                            <tr>
                                <th class="wd-15p">School Id</th>
                                <th class="wd-15p">Student Id</th>
                                <th class="wd-20p">Reference</th>
                                <th class="wd-15p">Term</th>
                                <th class="wd-10p">Session</th>
                                <th class="wd-10p">Amount</th>
                                <th class="wd-5p">Action</th>
                            </tr>

                        </thead>
                        <tbody>

                            {#each payments as payment }
                                <tr>
                                    <td>{payment.school_id}</td>
                                    <td>{payment.student_id}</td>
                                    <td>{payment.reference}</td>
                                    <td>{payment.term}</td>
                                    <td>{payment.session}</td>
                                    <td>{payment.amount}</td>
                                    <td> <button class="btn btn-info">View</button> </td>
                                </tr>
                            {/each}



                        </tbody>
                    </table>
                </div><!-- table-wrapper -->
            </div><!-- section-wrapper -->


        </div><!-- container -->
    </div><!-- slim-mainpanel -->



</main>