<script>
  import {
    onMount
  } from "svelte";
  import {
    GET_SCHOOL_BY_ID,
    GET_SCHOOL_FEE_INFORMATION

  } from "../../../../../utilis/actions.js";
  import {
    STORAGE_TOKEN,
    SET_TERM
  } from "../../../../../store.js";
  import {
    goto,
    url
  } from "@sveltech/routify";
  import numeral from 'numeral';

  export let slug;

  let isLoading = true;
  let token = null;
  let school = [];
  let terms = [];
  let fee_info = [];




  onMount(() => {
    STORAGE_TOKEN.subscribe(value => token = value);
    SET_TERM.subscribe(value => terms = value);

    getSchool();
    get_fee_information();

  })

  function init() {
    jQuery(document).ready(function ($) {
      $('#schools').DataTable({
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



  function getSchool() {
    const callback = res => {
      school = res;
    }

    const onError = err => {
      isLoading = false;
      console.log(err);
      $goto('/app/not-found');
    }

    GET_SCHOOL_BY_ID(slug.id, callback, onError);
  }

  function get_fee_information() {

    const term = JSON.parse(localStorage.getItem('selectedTerm'));

    const callback = res => {
      if (fee_info === null) {
        fee_info = res;
        init();
        setTimeout(() => {
          isLoading = false;
        }, 100)
      }



    }

    const onError = err => {
      isLoading = false;
      console.log(err);

    }

    GET_SCHOOL_FEE_INFORMATION(slug.id, term.term_id, callback, onError);
  }


  $: if (terms) {
    isLoading = true;
    fee_info = null;
    let getTerm = JSON.parse(localStorage.getItem('selectedTerm'));
    setTimeout(() => {
      if (getTerm.term_id === terms.term_id) {
        get_fee_information()
      }
    }, 100)

  }
</script>


<svelte:head>
  <title>School</title>
</svelte:head>



{#if isLoading}
<div class="loader">
  <div class="bubble-1"></div>
  <div class="bubble-2"></div>
</div>


{:else}
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
            <a href={$url(`/app/schools/${school.schoolid}`)}>{school.schoolname} </a> </li> <li
              class="breadcrumb-item active" aria-current="page">Fee Information
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
           {#if fee_info != null}
            {#each fee_info as fee,i}
                      <tr>
                        <td>{i + 1}</td>
                        <td>{fee.student_id}</td>
                        <td>{fee.name}</td>
                        <td>₦ {numeral(fee.total_fees).format('0,0')}</td>
                        <td>₦ {numeral(fee.total_paid).format('0,0')}</td>
                        <td>₦ {numeral(fee.total_owing).format('0,0')}</td>
                        <td>{fee.created_at}</td>

                      </tr>
            {/each}
           {/if}
            </tbody>
          </table>
        </div><!-- table-wrapper -->
      </div><!-- section-wrapper -->

    </div><!-- container -->
  </div><!-- slim-mainpanel -->
</main>

{/if}