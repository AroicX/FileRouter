<script>
  import {
    onMount
  } from "svelte";
  import {

    goto
  } from "@sveltech/routify";
  export let title;

  let isLoggedIn;


</script>



<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>

  <article>
    <slot />
  </article>
</main>