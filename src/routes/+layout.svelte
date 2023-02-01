<script>
	import { page } from '$app/stores';
	import '../app.css';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';

	$: homepage =
		!$page.params.type &&
		!$page.params.date &&
		!['/[entry]/schedule', '/[entry]/for-speakers'].includes($page.route.id);
</script>

<div class="w-full h-full bg-pbw-red">
	<div class="flex max-w-7xl items-right justify-end p-2 m-auto h-[50px] -mb-[30px]">
		<DarkModeToggle />
	</div>

	{#if homepage}
		<div class="px-6 xl:px-0">
			<div class="max-w-7xl mx-auto pt-10 pb-6">
				<h1 class="text-5xl uppercase font-bold text-pbw-white">
					<a href="https://prgblockweek.com">Prague Blockchain Week 2023</a>
				</h1>
				<div class="text-4xl text-pbw-yellow">June 2-11, 2023</div>
			</div>
		</div>
	{/if}
</div>

<div class="page-body">
	<slot />
</div>
