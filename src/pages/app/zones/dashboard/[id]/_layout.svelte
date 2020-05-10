<script>
  import Dashboard from "./dashboard.svelte";
  import {
    params
  } from '@sveltech/routify'


  export let slug;
  $: slug = $params;


  // const [send, receive] = crossfade({ duration: 200 });
</script>

<div>
  <!-- {JSON.stringify(scoped)} -->
  <!-- List of items (comments, posts, etc.) -->
  <Dashboard {slug} />
  <!-- modal -->
  <!-- <slot scoped={{ id, send, receive }} /> -->
</div>