<script>
  import {
    onMount
  } from "svelte";

  import {
    GET_SCHOOL_BY_ID,
    SINGLE_SCHOOL_PAYMENT_IN_A_TERM
  } from "../../../../../utilis/actions.js";

  import {
    STORAGE_TOKEN,
    SET_TERM,
    SET_ZONE
  } from "../../../../../store.js";

  import {
    goto,
    url
  } from "@sveltech/routify";
  import numeral from 'numeral';




  export let slug;

  let isLoading = true;
  let error = null;
  let token = null;
  let school = [];
  let terms = [];
  let zones = [];
  let payment_info = [];




  onMount(() => {
    STORAGE_TOKEN.subscribe(value => token = value);
    SET_TERM.subscribe(value => terms = value);
    SET_ZONE.subscribe(value => zones = value);
    getSchool();

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
      console.log(err);

      $goto('/app/not-found');

    }

    GET_SCHOOL_BY_ID(slug.id, callback, onError);
  }

  function get_school_payment_in_term() {
    const term = JSON.parse(localStorage.getItem('selectedTerm'));
    const callback = res => {


      setTimeout(() => {

        if (payment_info === null) {
          payment_info = res;
          init();
          isLoading = false;
          error = false;
        }


      }, 100)
    }

    const onError = err => {
      console.log(err);

      setTimeout(() => {
        isLoading = false;
        error = 'No data found';

      }, 100)


    }

    SINGLE_SCHOOL_PAYMENT_IN_A_TERM(slug.id, term.term_id, callback, onError);
  }

   $: if (terms.term_id != 'undefined') {

        isLoading = true;
        payment_info = null;
        let getTerm = JSON.parse(localStorage.getItem('selectedTerm'));
        setTimeout(() => {
            if (getTerm.term_id === terms.term_id) {
                get_school_payment_in_term()
            }
        }, 100)

    }





  $: if (payment_info) {
    error = false;
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
              class="breadcrumb-item active" aria-current="page">Payment Information
              <li />
        </ol>
        <h6 class="slim-pagetitle">{school.schoolname} </h6>
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
                                      <th class="wd-15p">Student Id</th>
                                      <th class="wd-20p">Reference</th>
                                      <th class="wd-15p">Term</th>
                                      <th class="wd-10p">Session</th>
                                      <th class="wd-10p">Amount</th>
                                      <!-- <th class="wd-5p">Action</th> -->
                                    </tr>

                                  </thead>
                                  <tbody>

                                  
                                    {#each payment_info as payment,i }
                                                      <tr>
                                                       <td>{i + 1}</td>
                                                          <td>{payment.school_id}</td>
                                                          <td>{payment.student_id}</td>
                                                          <td>{payment.reference}</td>
                                                          <td>{payment.term}</td>
                                                          <td>{payment.session}</td>
                                                          <td>₦ {numeral(payment.amount).format('0,0')}</td>
                                                          <!-- <td> <button class="btn btn-info">View</button> </td> -->
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