<script>
 
    export let status;

    $: if (status) {

       setTimeout(() => {
           status = !status
       },8000)
    }
</script>


<div class={status ? 'loader' : 'none'}>



    <div class="bar"></div>
</div>


