<script>
    import {
        onMount
    } from "svelte";
    import {
        STORAGE_TOKEN
    } from "../../../store.js";
    import {
        GET_SCHOOLS,
        CHANGE_TOKEN
    } from "../../../utilis/actions.js"

    import Loader from "../../../components/Loader.svelte";
    import {
        goto,
        beforeUrlChange
    } from "@sveltech/routify"


    let schools = [];
    let url_id = null
    let token = null;


    function checkUrl(id) {


     $beforeUrlChange((event) => {
            const data = {'name': 'John'};
            event.state.params = data;

            console.log(event)
            return true;
            // $$goto('',)
        })

    
      $goto(id)
    }




    onMount(() => {
        STORAGE_TOKEN.subscribe(value => token = value);
        getSchools();
    });



    function getSchools() {
        const callback = res => {
            schools = res.data;
            CHANGE_TOKEN(res.token)
            init();

        }
        const onError = err => {
            console.error(err);
        }

        GET_SCHOOLS(token, callback, onError);
    }


    function init() {
        jQuery(document).ready(function ($) {
            $('#schools').DataTable();
        });
    }
</script>


<svelte:head>
    <title>Schools</title>
</svelte:head>

<style>
    .slim-wrapper {
        height: 200px !important;
        overflow: scroll;
    }
</style>



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


                <div class="table-wrapper">
                    <table id="schools" class="table display responsive nowrap">
                        <thead>
                            <tr>
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

                            {#each schools as school}
                                <tr>
                                    <td>{school.school_id}</td>
                                    <td>{school.schoolname}</td>
                                    <td>{school.zone}</td>
                                    <td>{school.total_fees}</td>
                                    <td>{school.total_paid}</td>
                                    <td>{school.total_owing}</td>
                                   
                                    <td>{school.fully_paid_count}</td>
                                    
                                    <td>{school.partly_paid_count}</td>
                                 
                                    <td>{school.not_paid_count}</td>

                                    <!-- <td> <a class="btn btn-info" href="/app/schools/{school.school_id}">View</a> </td> -->
                                    <td> <button class="btn btn-info" on:click|once={() => checkUrl(school.school_id)}>View</button> </td>
                                </tr>
                            {/each} 

                        </tbody>
                    </table>
                </div><!-- table-wrapper -->
            </div><!-- section-wrapper -->



        </div><!-- container -->
    </div><!-- slim-mainpanel -->

</main>