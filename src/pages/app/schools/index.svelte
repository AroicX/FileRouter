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


    let schools = [];
    let token = null;


    onMount(() => {
        STORAGE_TOKEN.subscribe(value => token = value);
        getSchools();


    });



    function getSchools() {
        const callback = res => {
            schools = res.data;
            CHANGE_TOKEN(res.token)
            setTimeout(() => {
                init();
            }, 2000)
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
                                <th class="wd-15p">School Name</th>
                                <th class="wd-5p">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {#each schools as school}
                                <tr>
                                    <td>{school.schoolid}</td>
                                    <td>{school.schoolname}</td>

                                    <td> <a class="btn btn-info" href="/app/schools/{school.schoolid}">View</a> </td>
                                </tr>
                            {/each} 

                        </tbody>
                    </table>
                </div><!-- table-wrapper -->
            </div><!-- section-wrapper -->



        </div><!-- container -->
    </div><!-- slim-mainpanel -->

</main>