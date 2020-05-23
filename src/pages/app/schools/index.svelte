<script>
    import {
        onMount
    } from "svelte";
    import {
        STORAGE_TOKEN,
        SET_TERM
    } from "../../../store.js";
    import {
        GET_SCHOOLS,
        CHANGE_TOKEN
    } from "../../../utilis/actions.js"

    import Loader from "../../../components/Loader.svelte";
    import numeral from 'numeral';

    let schools = [];
    let token = null;
    let isLoading = true;
    let error = null;
    let terms = [];


    onMount(() => {
        STORAGE_TOKEN.subscribe(value => token = value);
        SET_TERM.subscribe(value => terms = value);

    });



    function getSchools() {

        let getTerm = JSON.parse(localStorage.getItem('selectedTerm'));
        const callback = res => {

            CHANGE_TOKEN(res.token)

            setTimeout(() => {
                if (schools === null) {
                    schools = res.data;
                    init();
                    isLoading = false;
                    error = false;
                }
            }, 2000)

        }
        const onError = err => {
            console.error(err);

            setTimeout(() => {
                isLoading = false;
                error = 'No data found';

            }, 2000)
        }

        GET_SCHOOLS(getTerm.term_id, token, callback, onError);
    }


    function init() {
        jQuery(document).ready(function ($) {
            $('#schools').DataTable({
                // responsive: true,
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


    $: if (terms) {
        isLoading = true;
        schools = null;
        getSchools();
    }

    $: if (schools) {
        error = false;

    }
</script>


<svelte:head>
    <title>Schools</title>
</svelte:head>

<style>
    .slim-wrapper {
        height: 200px !important;
        padding: 20px !important;
        overflow: scroll;
    }
</style>





{#if isLoading}
<div class="loader">
  <div class="bubble-1"></div>
  <div class="bubble-2"></div>
</div>


{:else}
<main>
    <Loader status={true} />
    <div class="slim-mainpanel">
        <div class="container">
            <div class="slim-pageheader">
                <ol class="breadcrumb slim-breadcrumb">
                    <li class="breadcrumb-item">
                        <a href='/'>Home</a>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">Schools</li>
                </ol>
                <h6 class="slim-pagetitle">Schools </h6>
            </div><!-- slim-pageheader -->

            <div class="section-wrapper">
                  {#if error}
                        <div class="error-box">
                        
                        
                            <div class="alert alert-info align-items-center">
                                <p> {error}</p>
                            </div>
                                            
                        </div>

                {:else}

                    <div class="table-wrapper">
                        <table id="schools" class="table display responsive nowrap">
                            <thead>
                                <tr>
                                    <th class="wd-15p">S/N</th>
                                    <th class="wd-15p">School Id</th>
                                    <th class="wd-15p">School <br> Name</th>
                                    <th class="wd-15p">Zone</th>
                                    <th class="wd-15p">Total Fees</th>
                                    <th class="wd-15p">Total Paid</th>
                                    <th class="wd-15p">Owing</th>

                                    <th class="wd-15p">Fully <br> Paid <br> Students</th>

                                    <th class="wd-15p">Partly <br> Paid <br> Students</th>

                                    <th class="wd-15p">Not <br> Paid <br> Students</th>
                                    <th class="wd-5p">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            {#each schools as school,i}
                                <tr>
                                 <td>{i + 1}</td>
                                    <td>{school.school_id}</td>
                                    <td>{school.schoolname}</td>
                                    <td>{school.zone}</td>
                                    <td> ₦ {numeral(school.total_fees).format('0,0')}</td>
                                    <td>{school.total_paid}</td>
                                    <td>₦ {numeral(school.total_owing).format('0,0') }</td>
                                   
                                    <td>{school.fully_paid_count}</td>
                                    
                                    <td>{school.partly_paid_count}</td>
                                 
                                    <td>{school.not_paid_count}</td>

                                    <td> <a class="btn btn-info" href="/app/schools/{school.school_id}">View</a> </td>
                                </tr>
                            {/each} 

                        </tbody>
                    </table>
                </div><!-- table-wrapper -->

                {/if}
            </div><!-- section-wrapper -->



        </div><!-- container -->
    </div><!-- slim-mainpanel -->

</main>

{/if}