<script>
    export let name = null;
    export let colspan = 1;
    export let start = 1;
    export let img = null;
    export let big = null;
    export let medium = null;
</script>

<div class="bg-slate-200 hover:bg-slate-300 px-2 py-4 text-slate-600 text-sm md:text-md content-center" style="grid-column: {start} / span {colspan}">
    <div class="mb-2">{name}</div>
    {#if img}
        {#if big}
            <img src="{img}" alt="{name}" class="w-36 rounded-lg drop-shadow place-self-center m-auto" />
        {/if}
        {#if medium}
            <img src="{img}" alt="{name}" class="w-20 rounded-lg drop-shadow place-self-center m-auto" />
        {/if}
    {/if}
    
</div>