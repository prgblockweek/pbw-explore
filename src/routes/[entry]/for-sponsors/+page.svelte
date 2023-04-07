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
	<title>For sponsors | #PBW{$page.params.entry}</title>
</svelte:head>

<Header path="schedule" type="for-sponsors" />

<div class="w-full">
	<div class="max-w-7xl mx-auto pt-5 md:pt-10">
		<div class="mx-4 xl:mx-0 pbw-text-color-secondary">
			<h2 class="text-2xl uppercase font-bold">For sponsors</h2>
			<div class="text-xl mt-4">
				Do you want to sponsor an event that takes place as part of #PBW23?
			</div>
			<div class="text-xl mt-2">
				On this page you will find a list of events that accept sponsors and links to their sponsor
				decks.
			</div>

			<div class="mt-10">
				{#each data.bundle.events.filter((e) => e.sponsors) as event}
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
						<div class="mt-2">Date: <span>{formatItemDate(event, { full: true })}</span></div>
						{#if event.sponsors.range}
							<div class="mt-2">Range: {event.sponsors.range}</div>
						{/if}
						{#if event.sponsors.text}
							<div class="mt-2">{event.sponsors.text}</div>
						{/if}
						<div class="mt-2">
							<a href={event.sponsors.link} target="_blank" class="underline hover:no-underline"
								>Pitch deck</a
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<Footer bundle={data.bundle} />
