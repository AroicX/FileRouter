<script>
  export let controlType = null;
  export let id = null;
  export let label;
  export let rows = null;
  export let value;
  export let type;
  export let valid = true;
  export let validityMessage = "";

  let touched = false;
</script>

<style>
  .invalid {
    border: 1px solid red;
    background: #fde3e3;
  }

  .error-message {
    font-weight: lighter;
    color: #ff0000b3;
    margin: 0.25rem 0;
  }
</style>

<div class="input-item input-with-label">
  <label class="input-item-label text-exlight" for={id}>{label}</label>
  {#if controlType === 'textarea'}
    <textarea
      {id}
      bind:value={value}
      {rows}
      class="input-bordered {!valid && touched}"
      on:input
      on:blur={() => (touched = true)} />
  {:else}
    <input
      {id}
      {type}
      value={value}
      class="input-bordered {!valid && touched}"
      on:input
      on:blur={() => (touched = true)} />
  {/if}

  {#if validityMessage && !valid && touched}
    <p class="error-message">{validityMessage}</p>
  {/if}

</div>

