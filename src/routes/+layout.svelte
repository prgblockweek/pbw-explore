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

<div class="w-full h-full bg-bbw-navy">
	<div
		class="flex gap-4 max-w-7xl items-center justify-end p-2 m-auto h-[50px] -mb-[30px] text-white"
	>
		<div class="my-auto">
			{#if typeof window !== 'undefined'}
				<SOffline pingUrl="https://x.gwei.cz/" on:detectedCondition={handleNetworkChange}>
					<span slot="online" class="flex gap-2 items-center text-bbw-yellow">
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
				<h1 class="text-4xl font-bold text-bbw-white">
					<a href="/">Berlin Blockchain Week 2024</a>
				</h1>
				<div class="text-2xl text-bbw-yellow">May 18-27, 2024</div>
			</div>
		</div>
		<div class="bg-white dark:bg-bbw-dark px-6 xl:px-0 pt-6 pb-4">
			<div class="max-w-7xl mx-auto bg-bbw-navy/10 text-bbw-navy dark:text-gray-300 rounded-lg">
				<div class="p-5 text-lg">
					<p>
						Berlin Blockchain Week is a decentralized community-organized initiative. There is no
						single owner. It is an agnostic movement based on the premise that self-organization is
						the backbone of the ecosystem. We invite projects, individuals and anyone interested in
						fruitful and educational discussions to join us in Berlin in May.<br /><br />
						We are committed to reduce the noise from the market and focus on education, in order to
						push mass adoption by providing first-hand information about the industry.<br /><br />
						Our concept is simple: keep it educational, try to be as cost-friendly for the community
						as you can (bearing in mind, we all need to pay bills - so not all events are free!) and
						to create a welcoming and inclusive environment, so interested parties at anyknowledge level
						feel comfortable to join.
					</p>
					<div class="pt-4 text-xl flex flex-wrap gap-4">
						<div>
							🐦
							<a
								href="https://twitter.com/BerBlockWeek"
								class="underline hover:no-underline"
								target="_blank"
								rel="noreferrer">Follow us on Twitter</a
							>
						</div>
						<div>
							💬
							<a
								href="https://matrix.to/#/%23blockchainweek:dod.ngo"
								class="underline hover:no-underline"
								target="_blank"
								rel="noreferrer">Join our Matrix space</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<div class="page-body">
	<slot />
</div>
