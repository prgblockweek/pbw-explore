<script>
	export let data;
	import { page } from '$app/stores';
	import CollectionList from '$lib/components/CollectionList.svelte';
	import CalendarList from '$lib/components/CalendarList.svelte';
	import ItemLogo from '$lib/components/ItemLogo.svelte';
	import EventTypeBadge from '$lib/components/EventTypeBadge.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { formatItemDate, bareDomain, getFlagEmoji } from '$lib/utils.js';
	import { config } from '$lib/pbw';
	import { format } from 'date-fns';
	import { formatInTimeZone } from 'date-fns-tz';

	const colsDef = Object.fromEntries(
		Object.keys(config.collections).map((col) => {
			return [config.collections[col].model, col];
		})
	);

	const speakerLinks = {
		twitter: { col: (x) => (x.twitter ? 'https://twitter.com/' + x.twitter : null) },
		web: { col: (x) => x.web?.url },
		linkedin: { col: (x) => (x.linkedin ? 'https://linkedin.com/in/' + x.linkedin : null) }
	};

	function eventDates(event) {
		const dates = [];
		for (const seg of event.segments) {
			if (seg.remote) continue;
			const date = formatInTimeZone(new Date(seg.startTime), config.tz, 'yyyy-MM-dd');
			if (!dates.includes(date)) {
				dates.push(date);
			}
		}
		return dates;
	}

	function enrichItem(it) {
		if (!it || !it.segments) return it;
		// segments
		let segments = it.segments;
		for (let i = 0; i < segments.length; i++) {
			const sg = segments[i];
			if (sg.remote) {
				const event = data.bundle.events.find((e) => e.id === sg.remote);
				if (!event || !event.segments) {
					continue;
				}
				const remoteSegments = event.segments.map((rs) =>
					Object.assign(rs, {
						event,
						remote: true
					})
				);
				segments.splice(i, remoteSegments.length, ...remoteSegments);
			}
		}
		it.segments = segments;
		return it;
	}

	$: entry = $page.params.entry;
	$: col = $page.params.type;
	$: colPlural = colsDef[col];
	$: item = enrichItem(data.bundle[colPlural].find((e) => e.id === $page.params.slug));
	$: defs = data.schema ? data.schema.definitions[col] : {};

	function venuesMap(arr, rich = false) {
		return arr
			.map((vId) => {
				const place = data.bundle.places.find((p) => p.id === vId);
				return rich
					? `<a href="/${$page.params.entry}/place/${place.id}" class=\"underline hover:no-underline\">${place.name}</a>`
					: place.name;
			})
			.join(', ');
	}

	$: itemDescription =
		col === 'event'
			? `${formatItemDate(item, { full: true })} @ ${
					item.venues ? venuesMap(item.venues) : item.venueName
			  }. ${item.tags ? item.tags.join(', ') : ''}`
			: null;
	$: itemImage = item[config.collections[colPlural]?.img || 'logo'];
</script>

<svelte:head>
	<title>{item.name} | Berlin Blockchain Week 20{$page.params.entry}</title>
	<meta name="description" content={itemDescription} />
	<meta name="keywords" content={item.tags ? item.tags.join(', ') : ''} />

	{#if item.links?.web}
		<meta property="og:url" content={item.links.web} />
		<meta property="og:type" content="website" />
	{/if}
	<meta property="og:title" content={item.name} />
	<meta property="og:description" content={itemDescription} />
	<meta property="og:image" content={itemImage} />

	<meta name="twitter:card" content="summary" />
	{#if item.links?.twitter}
		<meta
			name="twitter:site"
			content="@{item.links.twitter.replace(/https?:\/\/(twitter\.com\/)/g, '')}"
		/>
	{/if}
	<meta name="twitter:title" content="{item.name} | #BBW{$page.params.entry}" />
	<meta name="twitter:description" content={itemDescription} />
	<meta name="twitter:image" content={itemImage} />
</svelte:head>

<Header path={colsDef[$page.params.type]} type={$page.params.type} />

<div class="w-full dark:text-gray-200">
	<div class="max-w-7xl mx-auto pt-5 md:pt-10">
		<div class="mx-4 xl:mx-0">
			<div class="flex flex-wrap md:flex-nowrap w-full">
				<ItemLogo
					{item}
					img={config.collections[colPlural]?.img || 'logo'}
					aspect={config.collections[colPlural]?.aspect || 'aspect-square'}
					width="w-48 h-48 md:w-56 md:h-56 mr-5"
					rounded="rounded-xl"
				/>
				<div class="flex-grow">
					<h1 class="pbw-text-color-primary text-4xl md:text-5xl font-bold mt-4 md:mt-0">
						{item.name}
					</h1>
					{#if col === 'event' || col === 'other-event'}
						<div class="text-2xl flex gap-4 mt-2 flex-wrap">
							<div class="flex gap-1 items-center">
								{#each item.types as type}
									<EventTypeBadge {type} />
								{/each}
							</div>
							<div class="">{formatItemDate(item, { full: true })}</div>
							<div>
								📍
								{#if item.venues}
									{@html venuesMap(item.venues, true)}
								{:else if item.venueUrl}
									<a
										href={item.venueUrl}
										target="_blank"
										class="underline hover:no-underline external"
										rel="noreferrer">{item.venueName}</a
									>
								{:else}
									{item.venueName}
								{/if}
							</div>
							{#if item.attendees}
								<div>👥 {item.attendees}</div>
							{/if}
						</div>
					{/if}
					{#if col === 'speaker'}
						<div class="text-2xl mt-2 markdown">
							<SvelteMarkdown source={item.caption} />
						</div>
						<div class="flex flex-wrap gap-4 mt-4 text-xl">
							{#each Object.keys(speakerLinks) as lk}
								{#if speakerLinks[lk].col(item)}
									<div>
										<span class="opacity-40 text-sm uppercase">{lk} →</span>
										<a
											href={speakerLinks[lk].col(item)}
											target="_blank"
											class="underline hover:no-underline"
											rel="noreferrer"
											>{bareDomain(speakerLinks[lk].col(item), lk)}</a
										>
									</div>
								{/if}
							{/each}
						</div>
					{/if}
					{#if col === 'event' || col === 'other-event'}
						<div class="flex flex-wrap gap-6 text-xl mt-4">
							{#if item.chains && item.chains.length > 0}
								<div>
									<div class="uppercase text-sm opacity-40">Chains</div>
									<div class="flex gap-2">
										{#each item.chains.map((chId) => {
											const chItem = data.bundle.chains.find((x) => x.id === chId);
											if (!chItem) {
												return { name: chain.substr(0, 1).toUpperCase() + chain.substr(1) };
											}
											return chItem;
										}) as chain}
											<div class="flex items-center">
												{#if chain.id}
													<a
														href="/{entry}/chain/{chain.id}"
														class="flex items-center underline hover:no-underline"
													>
														{#if chain.logo}
															<ItemLogo item={chain} width="w-5 h-5 mr-1" />
														{/if}
														{chain.name}
													</a>
												{:else}
													{chain.name}
												{/if}
											</div>
										{/each}
									</div>
								</div>
							{/if}
							{#if item.tags && item.tags.length > 0}
								<div>
									<div class="uppercase text-sm opacity-40">Tags</div>
									<div class="flex gap-2">
										{#each item.tags as tag}
											<div>#{tag}</div>
										{/each}
									</div>
								</div>
							{/if}
							{#if item.languages && item.languages.length > 0}
								<div>
									<div class="uppercase text-sm opacity-40">Languages</div>
									<div class="flex gap-2">
										{#each item.languages as lang}
											<div>{getFlagEmoji(lang)} {lang}</div>
										{/each}
									</div>
								</div>
							{/if}
							{#if col !== 'other-event'}
								<div>
									<div class="uppercase text-sm opacity-40">Organizator</div>
									<div class="markdown"><SvelteMarkdown source={item.org || 'TBD'} /></div>
								</div>
							{/if}
							{#if item.poc}
								<div>
									<div class="uppercase text-sm opacity-40">Point of contact</div>
									<div class="markdown"><SvelteMarkdown source={item.poc} /></div>
								</div>
							{/if}
						</div>
					{/if}
					{#if col === 'place'}
						<div class="flex flex-wrap gap-6 text-xl mt-4">
							{#if item.address}
								<div>
									<div class="uppercase text-sm opacity-40">Address</div>
									<div class="flex gap-2">
										{#if item.mapUrl}
											<a
												href={item.mapUrl}
												target="_blank"
												class="external underline hover:no-underline"
												rel="noreferrer">{item.address}</a
											>
										{:else}
											{item.address}
										{/if}
									</div>
								</div>
							{/if}
							{#if item.capacity}
								<div>
									<div class="uppercase text-sm opacity-40">Capacity</div>
									<div class="flex gap-2">
										{item.capacity} ppl
									</div>
								</div>
							{/if}
							{#if item.eventTypes && item.eventTypes.length > 0}
								<div>
									<div class="uppercase text-sm opacity-40">Event Types</div>
									<div class="flex gap-2">
										{#each item.eventTypes as type}
											<div>{type}</div>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{/if}
					{#if item.links}
						<div class="flex flex-wrap gap-4 mt-4 text-xl">
							{#each Object.keys(item.links) as lk}
								<div>
									<span class="opacity-40 text-sm uppercase">{lk} →</span>
									<a href={item.links[lk]} target="_blank" class="underline hover:no-underline"
									rel="noreferrer"
										>{bareDomain(item.links[lk], lk)}</a
									>
								</div>
							{/each}
						</div>
					{/if}
				</div>

				{#if item.registration}
					<div class="text-xl lg:flex-nowrap mt-6 lg:mt-0">
						<div class="w-auto rounded-lg md:text-right gap-4">
							{#if item.registration.link}
								<div class="pb-2">
									<a href={item.registration.link} class="" target="_blank"
									rel="noreferrer">
										<div
											class="inline-block py-3 px-6 border border-pbw-red hover:bg-pbw-red hover:text-white text-pbw-red text-xl rounded-lg whitespace-nowrap"
										>
											{#if item.registration.button}
												{item.registration.button}
											{:else if item.registration.type === 'tickets'}
												Buy tickets!
											{:else}
												Request tickets!
											{/if}
										</div>
									</a>
								</div>
							{:else}
								<div
									class="inline-block py-2 px-4 border border-gray-400 text-gray-400 text-lg rounded-lg mb-2 cursor-not-allowed"
								>
									{#if item.registration.type === 'tickets'}
										Tickets not yet available
									{:else if item.registration.type === 'invites'}
										Application form is not yet available
									{/if}
								</div>
							{/if}
							<div>
								{#if item.registration.status}
									<div>
										<span class="opacity-40 text-sm uppercase mr-1">Status</span>
										{#if item.registration.status === 'available'}
											<span class="text-green-700">• Available</span>
										{:else if item.registration.status === 'sold-out'}
											<span class="text-red-700">• Sold Out!</span>
										{:else if item.registration.status === 'closed'}
											<span class="text-yellow-700">• Registration closed</span>
										{/if}
									</div>
								{/if}
								<div>
									<span class="opacity-40 text-sm uppercase mr-1">Price</span>
									{#if item.registration.type === 'tickets'}
										{item.registration.price || 'TBA'}
									{:else}
										Free!
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>

			{#if item.desc || item.description}
				<div class="mt-4 text-xl markdown">
					<div><SvelteMarkdown source={item.desc || item.description} /></div>
				</div>
			{/if}

			{#if col === 'event'}
				{#if item.tracks}
					<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">Tracks</h2>
					<div class="flex flex-wrap gap-2 mt-4">
						{#each item.tracks as track}
							<div
								class="border rounded-lg bg-gray-50 dark:text-gray-300 dark:border-gray-300 dark:bg-transparent items-center py-1.5 px-2"
							>
								<div class="text-xl" title={track.name}>{track.shortname || track.name}</div>
							</div>
						{/each}
					</div>
				{/if}
				{#if item.segments}
					<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">Schedule</h2>
					{#each eventDates(item) as date}
						<div class="mb-6">
							<h3 class="mt-4 text-xl uppercase text-gray-500 dark:text-gray-400">
								<a href="/{entry}/day/{date}">{format(new Date(date), 'EEEE - MMMM d, yyyy')}</a>
							</h3>
							<div class="mt-4">
								<CalendarList
									{date}
									segments={item.segments.filter(
										(s) =>
											s.remote ||
											formatInTimeZone(new Date(s.startTime), config.tz, 'yyyy-MM-dd') === date
									)}
									{entry}
									bundle={data.bundle}
									event={item}
								/>
							</div>
						</div>
					{/each}
				{/if}
				{#if item.speakers}
					<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
						Speakers ({item.speakers?.length || 0})
					</h2>
					<div
						class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl"
					>
						<CollectionList
							arr={item.speakers}
							bundle={data.bundle}
							currentItem={item}
							circle="true"
						/>
					</div>
				{/if}
				{#if item.events}
					<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
						Sub-Events ({item.events?.length || 0})
					</h2>
					<div
						class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center"
					>
						<CollectionList arr={item.events} />
					</div>
				{/if}
				{#if item.venues}
					<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
						Venues ({item.venues?.length || 0})
					</h2>
					<div
						class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl"
					>
						<CollectionList
							arr={data.bundle.places.filter((p) => item.venues.includes(p.id))}
							col="place"
							img="photo"
						/>
					</div>
				{/if}
				{#if item.cfp}
					<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
						<a href="/{entry}/for-speakers">For speakers</a>
					</h2>
					<div class="mt-4 text-xl">
						This event is looking for speakers.{item.cfp.text ? ' ' + item.cfp.text : ''}
						<a href={item.cfp.link} target="_blank" class="underline hover:no-underline"
						rel="noreferrer"
							>Submit a proposal</a
						>.
					</div>
				{/if}
				{#if item.sponsors}
					<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
						<a href="/{entry}/for-sponsors">For sponsors</a>
					</h2>
					<div class="mt-4 text-xl">
						This event is looking for sponsors{item.sponsors.range
							? ' in the ' + item.sponsors.range + ' range'
							: ''}.{item.sponsors.text ? ' ' + item.sponsors.text : ''} Check out their
						<a href={item.sponsors.link} target="_blank" class="underline hover:no-underline"
						rel="noreferrer"
							>pitch deck</a
						>.
					</div>
				{/if}
			{/if}
			{#if col === 'union'}
				<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
					Big events ({item.events?.map((eId) => data.bundle.events.find((e) => e.id === eId))
						.length})
				</h2>
				<div
					class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mt-4 text-2xl text-center"
				>
					<CollectionList
						arr={item.events?.map((eId) => data.bundle.events.find((e) => e.id === eId))}
						col="event"
						img="logo"
					/>
				</div>
			{/if}
			{#if col === 'speaker'}
				<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
					Events ({data.bundle.events.filter((e) => e.speakers?.find((s) => s.id === item.id))
						.length || 0})
				</h2>
				<div
					class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl"
				>
					<CollectionList
						arr={data.bundle.events.filter((e) => e.speakers?.find((s) => s.id === item.id))}
						col="event"
						img="logo"
					/>
				</div>
			{/if}
			{#if col === 'place'}
				<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
					Events ({data.bundle.events.filter((e) => e.venues?.includes(item.id)).length || 0})
				</h2>
				<div
					class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl"
				>
					<CollectionList
						arr={data.bundle.events.filter((e) => e.venues?.includes(item.id))}
						col="event"
						img="logo"
					/>
				</div>
			{/if}
			{#if col === 'chain'}
				<h2 class="text-2xl uppercase font-bold mt-10 pbw-text-color-secondary">
					Events ({data.bundle.events.filter((e) => e.chains?.includes(item.id)).length || 0})
				</h2>
				<div
					class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl"
				>
					<CollectionList
						arr={data.bundle.events.filter((e) => e.chains?.includes(item.id))}
						col="event"
						img="logo"
					/>
				</div>
			{/if}
		</div>
	</div>
</div>

<Footer {col} {item} bundle={data.bundle} />
