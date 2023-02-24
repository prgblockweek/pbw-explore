<script>
	import { format } from 'date-fns';
	import ItemLogo from '$lib/components/ItemLogo.svelte';
	import EventTypeBadge from '$lib/components/EventTypeBadge.svelte';

	export let segments;
	export let date;
	export let col = 'event';
	export let entry;
	export let bundle;
	export let event = null;

	for (let i = 0; i < segments.length; i++) {
		const sg = segments[i]
		if (sg.remote) {
			const event = bundle.events.find(e => e.id === sg.remote)
			const remoteSegments = event.segments.map(rs => Object.assign(rs, {
				event,
				remote: true
			}))
			segments.splice(i, remoteSegments.length, ...remoteSegments)
		}
	}

</script>

<div class="text-2xl">
	{#each segments as segment}
		<div
			class="md:flex flex-wrap mb-2 gap-3 items-center text-gray-800 border dark:text-gray-200 border-gray-300 rounded-lg md:border-none px-3 py-2 md:px-0 md:py-0"
		>
			<div class="flex gap-2">
				<div class="text-xl md:w-32 md:text-right">
					{format(new Date(segment.startTime), 'HH:mm')} - {format(
						new Date(segment.endTime),
						'HH:mm'
					)}
				</div>
				{#if !event}
					<div class="gap-1 items-center md:ml-2 inline-flex md:hidden text-xs">
						{#each (segment.event || event).types as type}
							<EventTypeBadge {type} />
						{/each}
					</div>
				{/if}
			</div>
			<div class="md:flex gap-2 items-center mb-6 md:mb-0">
				<div class="flex gap-2 items-center my-2 md:my-0">
					<a href="/{entry}/{col}/{(segment.event || event).id}">
						<ItemLogo item={segment.event || event} width={event ? 'w-8' : 'w-10'} />
					</a>
					<div>
						{#if !event || segment.remote}
							{#if (segment.event || event).hidden}
								{(segment.event || event)[(segment.event || event).shortname ? 'shortname' : 'name']}*
							{:else}
								<a
									href="/{entry}/{col}/{(segment.event || event).id}"
									class="text-pbw-red hover:underline"
									>{(segment.event || event)[(segment.event || event).shortname ? 'shortname' : 'name']}</a
								>
							{/if}
						{:else}
							<span class="">{event.shortname || event.name}</span>
						{/if}
						{#if segment.title}
							- {segment.title}
						{/if}
					</div>
				</div>
				<div class="flex flex-wrap gap-2">
					{#if !event && !segment.remote}
						<div class="gap-1 items-center md:ml-2 hidden md:inline-flex text-xs">
							{#each (segment.event || event).types as type}
								<EventTypeBadge {type} />
							{/each}
						</div>
					{/if}
					<div class="text-xl">
						{#if segment.venues || event?.venues}
							📍 {@html (segment.venues || event.venues)
								.map((vId) => {
									const place = bundle.places.find((p) => p.id === vId);
									return `<a href="/${entry}/place/${place.id}" class=\"underline hover:no-underline\">${place.name}</a>`;
								})
								.join('<span>, </span>')}
						{:else if segment.event?.venueName || event?.venueName}
							📍 {segment.event?.venueName || event?.venueName}
						{/if}
					</div>
					{#if segment.ecap || event?.attendees || segment.event?.attendees}
						<div class="text-lg">
							👥 {segment.ecap || event?.attendees || segment.event?.attendees}
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>
