<script>
  import {
    onMount
  } from "svelte";
  import {
    GET_SCHOOL_BY_ID,
    CHANGE_TOKEN,
    GET_SCHOOL_FEE_INFORMATION

  } from "../../../../../utilis/actions.js";
  import {
    STORAGE_TOKEN
  } from "../../../../../store.js";
  import {
    goto,
    url
  } from "@sveltech/routify";

  export let slug;


  let token = null;
  let school = [];
  let fee_info = [];




  onMount(() => {
    STORAGE_TOKEN.subscribe(value => token = value);
    getSchool();
    get_fee_information();

  })

  function init() {
    jQuery(document).ready(function ($) {
      $('#schools').DataTable();
    });
  }



  function getSchool() {
    const callback = res => {
      school = res.data;
      CHANGE_TOKEN(res.token)
    }

    const onError = err => {
      console.log(err);

      $goto('/app/not-found');

    }

    GET_SCHOOL_BY_ID(slug.id, token, callback, onError);
  }

  function get_fee_information() {

    const term = JSON.parse(localStorage.getItem('selectedTerm'));
    // console.log(term_id)

    const callback = res => {
      fee_info = res.data;
      init();
      CHANGE_TOKEN(res.token)
    }

    const onError = err => {
      console.log(err);

    }

    GET_SCHOOL_FEE_INFORMATION(slug.id, term.term_id, token, callback, onError);
  }
</script>


<svelte:head>
  <title>School</title>
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
            <a href='/app/schools'>School</a>
          </li>
           <li class="breadcrumb-item">
            <a href={$url(`/app/schools/${school.schoolid}`)}>{school.schoolname}</a>
          </li>

          <li class="breadcrumb-item active" aria-current="page">Fee Information
            <li />
        </ol>
        <h6 class="slim-pagetitle">{school.schoolname} </h6>
      </div><!-- slim-pageheader -->

      <div class="section-wrapper">


        <div class="table-wrapper">
          <table id="schools" class="table display responsive nowrap">
            <thead>
              <tr>
                <th class="wd-15p">S/N</th>
                <th class="wd-15p">Student ID</th>
                <th class="wd-20p">Name</th>
                <th class="wd-15p">Total <br> Fees</th>
                <th class="wd-10p">Total <br> Paid</th>
                <th class="wd-10p">Total <br> Owing</th>
                <th class="wd-5p">Date</th>
              </tr>
            </thead>
            <tbody>
              {#each fee_info as fee,i}
              <tr>
                <td>{i + 1}</td>
                <td>{fee.student_id}</td>
                <td>{fee.name}</td>
                <td>₦ {fee.total_fees}</td>
                <td>₦ {fee.total_paid}</td>
                <td>₦ {fee.total_owing}</td>
                <td>{fee.created_at}</td>

              </tr>
            {/each}
            </tbody>
          </table>
        </div><!-- table-wrapper -->
      </div><!-- section-wrapper -->

    </div><!-- container -->
  </div><!-- slim-mainpanel -->



</main>