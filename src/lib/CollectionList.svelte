
<script>
    export let arr;
    export let entry = "23";
    export let col = "speaker";
    export let img = "photoUrl";

    const _url = (col, item) => `/${entry}/${col}/${item.id}`
</script>

{#each arr as item}
<div class="p-4">
    {#if item[img]}
        <a href={_url(col, item)}><img src={item[img]} class="rounded-3xl w-full mb-4" /></a>
    {/if}
    <h3 class=" text-pbw-red"><a href={_url(col, item)}>{item.shortname || item.name}</a></h3>
</div>
{/each}