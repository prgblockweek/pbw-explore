<script>
    import { format } from 'date-fns';
    import ItemLogo from '$lib/components/ItemLogo.svelte';

    export let segments;
    export let date;
    export let entry;
    export let bundle;
    export let event = null;
</script>

<div class="text-2xl">
    {#each segments as segment}
        <div class="flex flex-wrap mb-2 gap-3 items-center text-gray-800">
            <div class="text-xl md:w-32 text-right">{format(new Date(segment.startTime), "HH:mm")} - {format(new Date(segment.endTime), "HH:mm")}</div>
            <div class="flex flex-wrap gap-2 items-center mb-6 md:mb-0">
                    <div>
                        <a href="/{entry}/event/{(segment.event || event).id}">
                            <ItemLogo item={segment.event || event} width={event ? 'w-8' : 'w-10'}/>
                        </a>
                    </div>
                    <div class="">
                        {#if !event}
                            <a href="/{entry}/event/{(segment.event || event).id}" class="text-pbw-red hover:underline">{(segment.event || event)[event && event.shortname ? 'shortname' : 'name']}</a>
                        {:else}
                            <span class="">{event.shortname || event.name}</span>
                        {/if}
                        {#if segment.title}
                           - {segment.title}
                        {/if}
                    </div>
                <div class="text-xl">
                    {#if segment.venues || event?.venues}
                        @ {@html ((segment.venues || event.venues).map(vId => {
                            const place = bundle.places.find(p => p.id === vId)
                            return `<a href="/${entry}/place/${place.id}" class=\"underline hover:no-underline\">${place.name}</a>`
                        })).join("<span>, </span>")}
                    {:else if (segment.event?.venueName || event?.venueName)}
                        @ {(segment.event?.venueName || event?.venueName)}
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>