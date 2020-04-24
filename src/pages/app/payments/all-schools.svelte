<script>
    import {
        onMount
    } from "svelte";


    import {
        PAYMENT_ALL_SCHOOLS
    } from "../../../utilis/actions.js";

    let payments = [
         [
             'School Id',
             'Student Id',
             'Reference',
             'Term',
             'Session',
             'Amount',
        ]
    ]


    import Loader from "../../../components/Loader.svelte";




    onMount(() => {

        getPaymentsAll();

    })



    function init() {


        var container = document.getElementById('handsonMi');
        var hot = new Handsontable(container, {
            data: payments,
            rowHeaders: true,
            colHeaders: true,
            filters: true,
            dropdownMenu: true
        });

    }

    function getPaymentsAll() {

        const ls = JSON.parse(localStorage.getItem("currentUser"));

        const callback = res => {
            let sorted = res.data;
            sorted.forEach(pay => {
                payments.push([pay.school_id, pay.student_id,pay.reference,pay.term,pay.session,pay.amount]);
            });
            init();
        }

        const onError = err => {
            console.error(err);
        }

        PAYMENT_ALL_SCHOOLS(ls.token, callback, onError);
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
                <div id="handsonMi"></div>

            </div><!-- section-wrapper -->

        </div><!-- container -->
    </div><!-- slim-mainpanel -->



</main>