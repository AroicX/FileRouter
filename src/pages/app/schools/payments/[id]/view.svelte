<script>
  import {
    onMount
  } from "svelte";
  import {
    GET_SCHOOL_BY_ID,
    CHANGE_TOKEN,
    SINGLE_SCHOOL_PAYMENT_IN_A_TERM

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
  let payment_info = [];




  onMount(() => {
    STORAGE_TOKEN.subscribe(value => token = value);
    getSchool();
    get_school_payment_in_term();

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

  function get_school_payment_in_term() {

    const term = JSON.parse(localStorage.getItem('selectedTerm'));
    // console.log(term_id)

    const callback = res => {
      payment_info = res.data;
      init();
      CHANGE_TOKEN(res.token)
    }

    const onError = err => {
      console.log(err);

    }

    SINGLE_SCHOOL_PAYMENT_IN_A_TERM(slug.id, term.term_id, token, callback, onError);
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

          <li class="breadcrumb-item active" aria-current="page">Payment Information
            <li />
        </ol>
        <h6 class="slim-pagetitle">{school.schoolname} </h6>
      </div><!-- slim-pageheader -->

      <div class="section-wrapper">


        <div class="table-wrapper">
       <table id="schools" class="table display responsive nowrap">
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

                            {#each payment_info as payment }
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