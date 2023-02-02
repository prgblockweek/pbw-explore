<script>
	import { page } from '$app/stores';
	import { config } from '$lib/pbw';
	//import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import SvelteMarkdown from 'svelte-markdown';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import EventTypeBadge from '$lib/components/EventTypeBadge.svelte';
	import { formatItemDate, bareDomain, getFlagEmoji } from '$lib/utils.js';
	import makeBlockie from 'ethereum-blockies-base64';
	import TimelineHeatmap from '$lib/components/TimelineHeatmap.svelte';
	import ItemLogo from '$lib/components/ItemLogo.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';
	import DisclaimerHidden from '$lib/components/DisclaimerHidden.svelte';

	import { compareAsc, compareDesc, addMinutes } from 'date-fns';
	import { writable } from 'svelte/store';

	export let data;

	let entry = $page.params.entry;
	$: type = $page.params.type;
	$: tc = config.collections[type];
	$: items = data.bundle[type];

	function processItems(_items, query = {}) {
		if (!_items) return [];
		_items = JSON.parse(JSON.stringify(_items));
		if (type === 'events') {
			_items = _items.sort((x, y) => (x.date > y.date ? 1 : -1));
		}
		if (type === 'events' && query.start && query.end) {
			_items = _items.filter((item) => {
				return item.segments.find((sgm) => {
					const [tstart, tend] = sgm.times.split('-');
					return (
						compareAsc(new Date(sgm.startTime), new Date(query.start)) <= 0 &&
						compareAsc(new Date(sgm.endTime), new Date(query.end)) >= 0
					);
				});
				//        return compareAsc(item.new Date(query.segment) > 0)
			});
		}

		return _items;
	}

	$: processedItems = processItems(items); //, Object.fromEntries($page.url.searchParams))

	onMount(async () => {
		if (!config.collections[$page.params.type]) {
			const ftype = Object.keys(config.collections).find(
				(k) => config.collections[k].model === $page.params.type
			);
			if (ftype) {
				goto(`/${$page.params.entry}/${ftype}`);
			}
		}
	});
</script>

<svelte:head>
	<title>{tc?.title} | #PBW{$page.params.entry} Explore</title>
</svelte:head>

<Header path={false} type={$page.params.type} />

{#if tc}
	<div class="w-full">
		<div class="max-w-7xl mx-auto pt-5 md:pt-10">
			<div class="mx-4 xl:mx-0">
				<h2 class="text-2xl uppercase font-bold pbw-text-color-secondary">
					{tc.title} ({processedItems.length})
				</h2>
				<div class="text-xl mt-6 pbw-text-color-base">
					<table class="w-full table-auto">
						<thead>
							<tr class="text-left">
								{#if type === 'events'}
									<th class="text-right pr-4">📅</th>
									<th />
									<th>Name</th>
									<th class="hidden md:table-cell">📍</th>
									<th class="hidden md:table-cell">👥</th>
								{/if}
								{#if type === 'speakers'}
									<th />
									<th>Name</th>
									<th>🌎</th>
									<th class="hidden md:table-cell">🐦</th>
									<th class="hidden md:table-cell">Bio</th>
								{/if}
								{#if type === 'media-partners'}
									<th />
									<th>Name</th>
									<th>🌎</th>
									<th class="hidden md:table-cell">Description</th>
								{/if}
								{#if type === 'benefits'}
									<th />
									<th>Name</th>
									<th>Benefit</th>
								{/if}
								{#if type === 'places'}
									<th />
									<th>Name</th>
									<th>👥</th>
									<th class="hidden md:table-cell">Address</th>
								{/if}
							</tr>
						</thead>
						<tbody>
							{#each processedItems as item}
								<tr class="hover:bg-pbw-yellow/20 dark:hover:bg-pbw-white/10">
									{#if type === 'events'}
										<td class="text-right pr-2 md:pr-4 text-base md:text-xl"
											>{formatItemDate(item)}</td
										>
										<td class="w-12 md:w-14">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} />
											</a>
										</td>
										<td class="text-lg md:text-2xl flex items-center h-12">
											<div class="">
												{#if item.hidden}
													{item.name}*
												{:else}
													<a
														href="/{entry}/{tc.model}/{item.id}"
														class="text-pbw-red hover:underline">{item.name}</a
													>
												{/if}
											</div>
											<div class="gap-1 items-center ml-4 hidden md:flex">
												{#each item.types as type}
													<EventTypeBadge {type} />
												{/each}
											</div>
										</td>
										<td class="hidden md:table-cell">
											{#if item.venues}
												{@html item.venues
													.map((vId) => {
														const place = data.bundle.places.find((p) => p.id === vId);
														return `<a href="/${$page.params.entry}/place/${place.id}" class=\"underline hover:no-underline\">${place.name}</a>`;
													})
													.join(', ')}
											{:else if item.venueName}
												{#if item.venueUrl}
													<a href={item.venueUrl} class="underline hover:no-underline external"
														>{item.venueName}</a
													>
												{:else if item.venueName && item.venueName !== 'TBA'}{item.venueName}{:else}<span
														class="opacity-50">TBA</span
													>{/if}
											{/if}
										</td>
										<td class="hidden md:table-cell"
											>{#if item.attendees}{item.attendees}{:else}<span class="opacity-50">TBA</span
												>{/if}</td
										>
										<td class="hidden md:table-cell">
											{#if item.languages && item.languages.length > 0}
												<div class="flex gap-1">
													{#each item.languages as lang}
														<div>{getFlagEmoji(lang)}</div>
													{/each}
												</div>
											{/if}
										</td>
									{/if}
									{#if type === 'speakers'}
										<td class="w-12 md:w-14">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} img="photoUrl" />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline"
												>{item.name}</a
											>
										</td>
										<td
											>{item.country && item.country !== 'xx'
												? getFlagEmoji(item.country, false)
												: ''}</td
										>
										<td class="hidden md:table-cell">
											{#if item.twitter}
												@<a
													href="https://twitter.com/{item.twitter}"
													class="underline hover:no-underline">{item.twitter}</a
												>
											{/if}
										</td>
										<td class="hidden md:table-cell"><SvelteMarkdown source={item.caption} /></td>
									{/if}
									{#if type === 'media-partners'}
										<td class="w-20">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} width="w-16" aspect="aspect-[16/9]" />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline"
												>{item.name}</a
											>
										</td>
										<td>
											{#if item.languages && item.languages.length > 0}
												<div class="flex gap-1">
													{#each item.languages as lang}
														<div>{getFlagEmoji(lang)}</div>
													{/each}
												</div>
											{/if}
										</td>
										<td class="hidden md:table-cell">
											<SvelteMarkdown source={item.description} />
										</td>
									{/if}
									{#if type === 'benefits'}
										<td class="w-14">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline"
												>{item.name}</a
											>
										</td>
										<td class="h-12">{item.slogan}</td>
									{/if}
									{#if type === 'places'}
										<td class="w-14">
											<a href="/{entry}/{tc.model}/{item.id}">
												<ItemLogo {item} img="photo" />
											</a>
										</td>
										<td class="text-2xl h-12">
											<a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline"
												>{item.name}</a
											>
										</td>
										<td>{item.capacity}</td>
										<td class="hidden md:table-cell">{item.address}</td>
									{/if}
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				{#if type === 'events'}
					<DisclaimerHidden />
				{/if}
				{#if ['events', 'speakers'].includes(type)}
					<Disclaimer {type} />
				{/if}
			</div>
		</div>
	</div>
{/if}

<Footer bundle={data.bundle} />
