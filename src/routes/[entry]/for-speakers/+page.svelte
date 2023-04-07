<script>
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import ItemLogo from '$lib/components/ItemLogo.svelte';
	import { formatItemDate } from '$lib/utils.js';

	import { format, compareAsc } from 'date-fns';

	export let data;
</script>

<svelte:head>
	<title>For speakers | #PBW{$page.params.entry}</title>
</svelte:head>

<Header path="schedule" type="for-speakers" />

<div class="w-full">
	<div class="max-w-7xl mx-auto pt-5 md:pt-10">
		<div class="mx-4 xl:mx-0">
			<h2 class="text-2xl uppercase font-bold pbw-text-color-secondary">For speakers</h2>
			<div class="text-xl mt-4 pbw-text-color-secondary">
				Want to participate in #PBW23 and be a speaker at one of the events? In the following list
				you will find events that have open CfP for anyone.
			</div>
			<div class="text-xl mt-2 pbw-text-color-secondary">
				CfP means "Call for Papers" and it is a proposal system for talks or other content.
			</div>
			<div class="text-xl mt-2 pbw-text-color-secondary">
				Before submitting a proposal, get to know the focus of each conference or event in detail.
				Below you will find a link to the CfP, please follow the instructions directly on each event
				page when submitting papers.
			</div>

			<div class="mt-10">
				{#each data.bundle.events.filter((e) => e.cfp) as event}
					<div class="mb-10 text-xl">
						<div class="flex items-center h-14 gap-2 text-3xl">
							<ItemLogo item={event} width="w-12" />
							<div>
								<a
									href="/{$page.params.entry}/event/{event.id}"
									class="text-pbw-red hover:underline">{event.name}</a
								>
							</div>
						</div>
						<div class="mt-2 pbw-text-color-secondary">Date: <span>{formatItemDate(event, { full: true })}</span></div>
						{#if event.cfp.text}
							<div class="mt-2 pbw-text-color-secondary">{event.cfp.text}</div>
						{/if}
						<div class="mt-2 pbw-text-color-secondary">
							CfP link: <a
								href={event.cfp.link}
								target="_blank"
								class="underline hover:no-underline ">{event.cfp.link}</a
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<Footer bundle={data.bundle} />
