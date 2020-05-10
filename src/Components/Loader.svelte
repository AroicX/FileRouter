<script>
 
    export let status;

    $: if (status) {

       setTimeout(() => {
           status = !status
       },1000)
    }
</script>


<div class={status ? 'loader' : 'none'}>



    <div class="bar"></div>
</div>


