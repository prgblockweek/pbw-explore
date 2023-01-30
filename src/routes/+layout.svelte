<script>
	import { page } from '$app/stores';
	import '../app.css';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';

	$: homepage = !$page.params.type && !$page.params.date && $page.route.id !== '/[entry]/schedule';
</script>

{#if !homepage}
    <div class="w-full h-full bg-pbw-red relative">
        <div class="flex max-w-7xl items-right justify-end p-2 m-auto h-[50px] -mb-[30px]">
            <DarkModeToggle />
        </div>  
    </div>
{/if}


<div class="pb-24">
    <slot />
</div>