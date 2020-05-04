<script>
  import { onMount } from "svelte";
  export let title;

   let isLoggedIn;

  onMount(() => {
    if (localStorage.token) {
      const ls = JSON.parse(localStorage.getItem("token"));

      if (ls.token != null) {
        isLoggedIn = true;
        // window.location = '/app';
        // return false;
      }
    }



  });


</script>



<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>

  <article>
    <slot />
  </article>
</main>
