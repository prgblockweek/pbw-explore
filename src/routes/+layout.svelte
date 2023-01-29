<script>
    import { page } from '$app/stores';
    import "../app.css";

    $: homepage = !$page.params.type && !$page.params.date
</script>


{#if homepage}
<div class="px-6 xl:px-0 dark:bg-pbw-dark">
    <div class="max-w-7xl mx-auto pt-10 pb-6">
        <h1 class="text-5xl uppercase font-bold text-pbw-red"><a href="/{$page.params.entry}">Prague Blockchain Week 2023</a></h1>
        <div class="text-4xl text-pbw-yellow">June 2-11, 2023</div>
    </div>
</div>
{/if}

<div class="pb-24 dark:bg-pbw-dark">
    <slot />
</div>