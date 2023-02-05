<script>
	import { page } from '$app/stores';
	import '../app.css';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import { SOffline } from 's-offline';

	const handleNetworkChange = (status) => {
		console.log('event details: ', status);
	};

	$: homepage =
		!$page.params.type &&
		!$page.params.date &&
		!['/[entry]/schedule', '/[entry]/for-speakers', '/[entry]/for-sponsors'].includes(
			$page.route.id
		);
</script>

<div class="w-full h-full bg-pbw-red">
	<div
		class="flex gap-4 max-w-7xl items-center justify-end p-2 m-auto h-[50px] -mb-[30px] text-white"
	>
		<div class="my-auto">
			{#if typeof window !== 'undefined'}
				<SOffline pingUrl="https://x.gwei.cz/" on:detectedCondition={handleNetworkChange}>
					<span slot="online" class="flex gap-2 items-center text-pbw-yellow">
						<div>
							<svg class="w-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<circle cx="50" cy="50" r="50" fill="rgb(255 222 89)" />
							</svg>
						</div>
						<div>Online</div>
					</span>
					<span slot="offline" class="flex gap-2 items-center text-red-300">
						<div>
							<svg class="w-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
								<circle cx="50" cy="50" r="50" fill="rgb(252 165 165)" />
							</svg>
						</div>
						<div>Offline</div>
					</span>
				</SOffline>
			{/if}
		</div>
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
