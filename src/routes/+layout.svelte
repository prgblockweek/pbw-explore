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
		<div class="bg-white dark:bg-pbw-dark px-6 xl:px-0 pt-6 pb-4">
			<div class="max-w-7xl mx-auto bg-pbw-red/10 text-pbw-red dark:text-gray-300 rounded-lg">
				<div class="p-5 text-xl">
					<p>
						A decentralized gathering for cryptocurrency enthusiasts and related topics. It includes
						events like conferences, hackathons, workshops, meetups, and parties from Jun 2 - 11.
						Topics covered range from hard money to NFTs, DeFi to mining. The initiative is chain
						agnostic and aims to foster discussion among different blockchain proponents. Financial
						freedom, decentralization, and privacy are the common themes. More information and FAQs
						can be found in our <a
							href="https://guide.prgblockweek.com/"
							class="underline hover:no-underline">documentation</a
						>.
					</p>
					<div class="pt-4 text-2xl flex flex-wrap gap-4">
						<div>
							🐦
							<a
								href="https://twitter.com/PrgBlockWeek"
								class="underline hover:no-underline"
								target="_blank">Follow us on Twitter</a
							>
						</div>
						<div>
							📖
							<a
								href="https://guide.prgblockweek.com/"
								class="underline hover:no-underline"
								target="_blank">Read our #PBW23 Guide</a
							>
						</div>
						<div>
							💬
							<a
								href="https://t.me/PrgBlockWeek"
								class="underline hover:no-underline"
								target="_blank">Join our Telegram group</a
							>
						</div>
					</div>
					<!--p class="mt-5 opacity-50">⚠️ This is just a temporary site that will soon be replaced by a full-fledged website and information center for <a href="https://twitter.com/search?q=%23PBW23" target="_blank">#PBW23</a>. In the meantime, you can read the <a href="https://guide.prgblockweek.com/faq">FAQ</a> and learn more about our concept.</p-->
					<!--p class="mt-5 text-3xl text-center text-pbw-yellow">💛 #PBW23</p-->
				</div>
				<!--div class="flex flex-wrap gap-10 items-center text-center text-xl md:text-2xl uppercase mt-2 md:mt-7 pb-16 md:pb-24 text-pbw-yellow p-7">
					<div class="flex-grow"><a href="https://explore.prgblockweek.com" class="button">Explore #PBW23</a></div>
					<div class="flex-grow"><a href="https://twitter.com/PrgBlockWeek" target="_blank" class="button">Follow us on Twitter</a></div>
					<div class="flex-grow"><a href="https://t.me/PrgBlockWeek" target="_blank" class="button">Join Telegram group</a></div>
				</div-->
			</div>
		</div>
	{/if}
</div>

<div class="page-body">
	<slot />
</div>
