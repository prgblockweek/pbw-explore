<script>
    import makeBlockie from 'ethereum-blockies-base64';
    
    export let item;
    export let img = "logo";
    export let width = "w-10";
    export let aspect = "aspect-square";
    export let rounded = "rounded";
    
    $: blockie = !item[img] && item.hash ? makeBlockie('0x'+item.hash.substr(0,40)) : null
</script>

{#if item[img]}
    <img src={item[img]} class="{width} {rounded} {aspect} object-cover" alt={item.name} />
{:else if item.hash}
    <div class="{width} {rounded} {aspect} object-cover" style="background: url({blockie}); background-size: 100% 100%;"></div>
{/if}