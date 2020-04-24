<script>
    import {
        STORAGE_TOKEN
    } from "../../store.js";

    import {
        onMount
    } from "svelte";

    import {
        GET_SCHOOLS
    } from "../../utilis/actions.js";

    let schools = [
        ['School Id', 'School Name']
    ];

    let token = null;

    import Loader from "../../components/Loader.svelte";

    onMount(() => {
        STORAGE_TOKEN.subscribe(value => token = value);
        getSchools();
    });



    function init() {
        var container = document.getElementById('handsonMi');
        var hot = new Handsontable(container, {
            data: schools,
            rowHeaders: true,
            colHeaders: true,
            filters: true,
            dropdownMenu: true
        });
    }

    function getSchools() {
        const callback = res => {
            let sorted = res.data;
            sorted.forEach(school => {
                schools.push([school.schoolid, school.schoolname]);
            });
            init();
        }
        const onError = err => {
            console.error(err);
        }

        GET_SCHOOLS(token, callback, onError);
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
                <div id="handsonMi"></div>

            </div><!-- section-wrapper -->

        </div><!-- container -->
    </div><!-- slim-mainpanel -->

</main>