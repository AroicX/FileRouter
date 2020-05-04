<script>
  import {
    onMount
  } from "svelte";
  import {
    GET_SCHOOL_BY_ID
  } from "../../../../utilis/actions.js";
  import {
    STORAGE_TOKEN
  } from "../../../../store.js";

  export let slug;
  // export let route;

  let token = null;
  let school = [];


  onMount(() => {
    STORAGE_TOKEN.subscribe(value => token = value);
    getSchool();
  })



  function getSchool() {
    const callback = res => {
      school = res.data;
    }

    const onError = err => {
      console.log(err);
    }

    GET_SCHOOL_BY_ID(slug.id, token, callback, onError);
  }
</script>


<svelte:head>
  <title>School - {school ? school.schoolname : ''}</title>
</svelte:head>


<main>


  <div class="slim-mainpanel">
    <div class="container">
      <div class="slim-pageheader">
        <ol class="breadcrumb slim-breadcrumb">
          <li class="breadcrumb-item">
            <a href='/'>Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href='/payments/all-schools'>School</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{school.schoolname}</li>
        </ol>
        <h6 class="slim-pagetitle">Single School </h6>
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

              {#if school}
                                <tr>
                                    <td>{school.schoolid}</td>
                                    <td>{school.schoolname}</td>

                                    <!-- <td> <a class="btn btn-info" href="/app/schools/{school.schoolid}">View</a> </td> -->
                                </tr>
                           {/if}

                        </tbody>
                    </table>
        </div><!-- table-wrapper -->
      </div><!-- section-wrapper -->

    </div><!-- container -->
  </div><!-- slim-mainpanel -->


</main>