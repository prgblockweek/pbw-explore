<script>
	import CollectionList from '$lib/components/CollectionList.svelte';
	import TimelineHeatmap from '$lib/components/TimelineHeatmap.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { processItemsList } from '$lib/utils.js';

	export let data;
	$: entry = $page.params.entry;
	$: conferences = data.bundle.events.filter((e) => {
		return e.types.find((t) => ['conference', 'hackathon'].includes(t)) && !e.hidden;
	});
	$: otherEvents = data.bundle.events.filter((e) => {
		return !e.types.find((t) => ['conference', 'hackathon'].includes(t)) && !e.hidden;
	});

	const speakers = processItemsList(data.bundle.speakers);

	const collections = [
		{ title: 'Days', value: 10, col: 'schedule' },
		{ title: 'Events', col: 'events', filter: (e) => !e.hidden },
		{ title: 'Speakers', col: 'speakers', value: speakers.length },
		{ title: 'Places', col: 'places' },
		{ title: 'Media Partners', col: 'media-partners' },
		//{ title: "Blockchains", col: "chains" },
		//{ title: "Unions", col: "unions" },
		{ title: 'Benefits', col: 'benefits' }
	];
</script>

<svelte:head>
	<title>#PBW{$page.params.entry} Explore</title>
</svelte:head>

<div class="w-full px-6 xl:mx-0">
	<div class="max-w-7xl mx-auto pt-2">
		<div class="flex flex-wrap gap-2 my-6 text-center text-2xl">
			{#each collections as cd}
				<a href="/{$page.params.entry}/{cd.col}">
					<button
						class="border rounded border-pbw-red hover:bg-pbw-red hover:text-white py-2 px-2 text-pbw-red hover:shadow-lg"
					>
						{cd.value || data.bundle[cd.col]?.filter(cd.filter || ((e) => e)).length}
						{cd.title}
					</button>
				</a>
			{/each}
		</div>

		<TimelineHeatmap {data} />

		<h2 class="text-2xl uppercase font-bold pbw-text-color-secondary">
			<a href="/{entry}/events">Conferences & Hackathons</a> ({conferences.length})
		</h2>
		<Disclaimer />
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"
		>
			<CollectionList arr={conferences} img="logo" col="event" {entry} offer={true} />
		</div>

		<div
			class="mt-4 mb-8 text-lg bg-pbw-yellow/20 dark:bg-gray-700 pbw-text-color-secondary flex flex-wrap lg:flex-nowrap"
		>
			<div class="p-4">
				Are you a journalist or an influencer? Our <a
					href="https://guide.prgblockweek.com/media-partners/press-center"
					class="underline hover:no-underline font-medium">#PBW23 Press Center by Cleevio</a
				>
				is available for the entire duration of #PBW23 free of charge! We offer accredited
				journalists a quiet place to work and meet with fast internet, including a basic podcast
				studio. You can
				<a href="https://prgblockweek.com/media-registration" class="underline hover:no-underline"
					>Register here</a
				>.
			</div>
			<div class="flex-shrink-0 text-center justify-end">
				<a href="https://guide.prgblockweek.com/media-partners/press-center"
					><img src="/img/press-center-banner.webp" class="max-h-20 sm:max-h-32" /></a
				>
			</div>
		</div>

		<h2 class="text-2xl uppercase font-bold pbw-text-color-secondary">
			<a href="/{entry}/events">Meetups, parties and other events</a> ({otherEvents.length})
		</h2>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"
		>
			<CollectionList arr={otherEvents} img="logo" col="event" {entry} />
		</div>

		<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
			<a href="/{entry}/speakers">Speakers</a> ({speakers.length})
		</h2>
		<h2 class="text-xl uppercase font-bold mt-10 pbw-text-color-secondary">International 🌎</h2>
		<div
			class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 my-6 text-center text-xl"
		>
			<CollectionList
				arr={processItemsList(
					speakers
						.filter((s) => !['cz', 'sk'].includes(s.country))
						.sort((x, y) => (x.name > y.name ? 1 : -1))
				)}
				{entry}
				offer="true"
				circle="true"
			/>
		</div>
		<h2 class="text-xl uppercase font-bold mt-10 pbw-text-color-secondary">
			Local - Czech 🇨🇿 & Slovak 🇸🇰
		</h2>
		<div
			class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-8 my-6 text-center text-xl"
		>
			<CollectionList
				arr={processItemsList(
					speakers
						.filter((s) => ['cz', 'sk'].includes(s.country))
						.sort((x, y) => (x.name > y.name ? 1 : -1))
				)}
				{entry}
				offer="true"
				circle="true"
			/>
		</div>
		<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
			<a href="/{entry}/places">Places</a> ({data.bundle.places.length})
		</h2>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"
		>
			<CollectionList arr={data.bundle.places} col="place" img="photo" {entry} offer={true} />
		</div>
		{#if data.bundle.benefits}
			<h2 class="text-2xl uppercase font-bold pbw-text-color-secondary">
				<a href="/{entry}/benefits">PBW Benefits for visitors</a> ({data.bundle.benefits.length})
			</h2>
			<div
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-xl mb-8"
			>
				<CollectionList
					arr={data.bundle.benefits}
					img="logo"
					col="benefit"
					{entry}
					aspect="aspect-[16/9]"
					offer={true}
				/>
			</div>
		{/if}
		{#if data.bundle['media-partners']}
			<h2 class="text-2xl uppercase font-bold pbw-text-color-secondary">
				<a href="/{entry}/media-partners">PBW Media Partners & Communities</a> ({data.bundle[
					'media-partners'
				].length})
			</h2>
			<h2 class="text-xl uppercase font-bold mt-10 pbw-text-color-secondary">International 🌎</h2>
			<div
				class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-9 my-6 text-center text-2xl mb-8"
			>
				<CollectionList
					arr={data.bundle['media-partners'].filter(
						(m) => !['czech', 'slovak'].includes(m.languages[0])
					)}
					img="logo"
					col="media-partner"
					{entry}
					aspect="aspect-[16/9]"
					size="small"
				/>
			</div>
			<h2 class="text-xl uppercase font-bold mt-10 pbw-text-color-secondary">
				Local - Czech 🇨🇿 & Slovak 🇸🇰
			</h2>
			<div
				class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-9 my-6 text-center text-2xl mb-8"
			>
				<CollectionList
					arr={data.bundle['media-partners'].filter((m) =>
						['czech', 'slovak'].includes(m.languages[0])
					)}
					img="logo"
					col="media-partner"
					{entry}
					aspect="aspect-[16/9]"
					size="small"
				/>
			</div>
		{/if}
		<!--h2 class="text-2xl uppercase font-bold text-gray-500">Unions ({data.bundle.unions.length})</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 my-6 text-center text-3xl mb-8">
            <CollectionList arr={data.bundle.unions} img="logo" col="union" entry={entry}/>
        </div>

        <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500"><a href="/{entry}/chains">Blockchains</a> ({data.bundle.chains.length})</h2>       
        <div class="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 xl:grid-cols-12 my-6 text-center text-xl">
            <CollectionList arr={data.bundle.chains} col="chain" img="logo" entry={entry} />
        </div-->
	</div>
</div>

<Footer bundle={data.bundle} />
