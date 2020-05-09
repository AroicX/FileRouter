<script>
  import {
    onMount
  } from "svelte";
  import {
    GET_SCHOOL_BY_ID,
    CHANGE_TOKEN,
    SINGLE_SCHOOL_PAYMENT_DASHBOARD

  } from "../../../../utilis/actions.js";
  import {
    STORAGE_TOKEN
  } from "../../../../store.js";
  import {
    goto
  } from "@sveltech/routify";

  export let slug;
  // export let route;

  $:if(slug){
    console.log(slug);
  }

  let token = null;
  let school = [];
  let payment_dashboard = [];




  onMount(() => {
    STORAGE_TOKEN.subscribe(value => token = value);
    getSchool();
    getDashboard();

  })



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

  function getDashboard() {
    const callback = res => {
      payment_dashboard = res.data[0];
      CHANGE_TOKEN(res.token)
    }

    const onError = err => {
      console.log(err);

    }

    SINGLE_SCHOOL_PAYMENT_DASHBOARD(slug.id, token, callback, onError);
  }
</script>


<svelte:head>
  <title>School - {school ? school.schoolname : ''}</title>
</svelte:head>

