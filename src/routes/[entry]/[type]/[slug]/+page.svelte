<script>
    export let data;
    import { page } from '$app/stores';
    import CollectionList from '$lib/components/CollectionList.svelte';
    import EventTypeBadge from '$lib/components/EventTypeBadge.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import SvelteMarkdown from 'svelte-markdown';
    import { formatItemDate, bareDomain, getFlagEmoji } from '$lib/utils.js';
    import { config } from '$lib/pbw';

    const colsDef = Object.fromEntries(Object.keys(config.collections).map(col => { return [ config.collections[col].model, col ]}))

    const speakerLinks = {
        twitter: { col: x => x.twitter ? 'https://twitter.com/'+x.twitter : null },
        web: { col: x => x.web?.url },
        linkedin: { col: x => x.linkedin ? 'https://linkedin.com/in/'+x.linkedin : null }
    }

    $: entry = $page.params.entry
    $: col = $page.params.type
    $: colPlural = colsDef[col]
    $: item = data.bundle[colPlural].find(e => e.id === $page.params.slug)
    $: defs = data.schema ? data.schema.definitions[col] : {}
</script>

<svelte:head>
    <title>{item.name} | #PBW{$page.params.entry}</title>
</svelte:head>

<div class="w-full">
    <div class="max-w-7xl mx-auto pt-5 md:pt-10">
        <div class="mx-4 xl:mx-0">
            <div class="flex gap-8 mb-10">
                <h1 class="text-5xl font-bold text-pbw-red">
                    <a href="/{$page.params.entry}">#PBW23</a><a href="/{$page.params.entry}/{colsDef[$page.params.type]}"><span class="text-pbw-yellow">.{$page.params.type}</span></a>
                </h1>
            </div>
            <div class="flex flex-wrap md:flex-nowrap w-full">

                    {#if item.logo}
                        <div class="w-48 md:w-56 mr-5">
                            <img src={item.logo} class="rounded-xl" alt={item.name} />
                        </div>
                    {/if}
                    {#if item.photoUrl || item.photo}
                        <div class="w-48 mr-5">
                            <img src={item.photoUrl || item.photo} class="rounded-xl aspect-square object-cover" alt={item.name} />
                        </div>
                    {/if}
                    <div class="flex-grow">
                        <!--div class="font-normal text opacity-50 mt-4 md:mt-0 mb-1" style="line-height: 0.6em;"><a href="/{entry}/{col}">{col.toUpperCase()}</a></div-->
                        <h2 class="text-5xl font-bold text-gray-600">{item.name}</h2>
                        {#if col === 'event'}
                            <div class="text-2xl flex gap-4 mt-2 flex-wrap">
                                <div class="flex gap-1 items-center">
                                    {#each item.types as type}
                                        <EventTypeBadge {type} />
                                    {/each}
                                </div>
                                <div class="">{formatItemDate(item, { full: true })}</div>
                                <div>📍 
                                    {#if item.venueUrl}
                                        <a href="{item.venueUrl}" target="_blank" class="underline hover:no-underline">{item.venueName}</a>
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
                                        <div><span class="opacity-40 text-sm uppercase">{lk} →</span> <a href={speakerLinks[lk].col(item)} target="_blank" class="underline hover:no-underline">{bareDomain(speakerLinks[lk].col(item), lk)}</a></div>
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                        {#if col === 'event'}
                            <div class="flex flex-wrap gap-6 text-xl mt-4">
                                {#if item.chains && item.chains.length > 0}
                                    <div>
                                        <div class="uppercase text-sm opacity-40">Chains</div>
                                        <div class="flex gap-2">
                                            {#each item.chains as chain}
                                                <div>{chain.substr(0, 1).toUpperCase() + chain.substr(1)}</div>
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
                                <div><div class="uppercase text-sm opacity-40">Organizator</div><div class="markdown"><SvelteMarkdown source={item.org || 'TBD'} /></div></div>
                                {#if item.poc}
                                    <div><div class="uppercase text-sm opacity-40">Point of contact</div><div class="markdown"><SvelteMarkdown source={item.poc} /></div></div>
                                {/if}
                            </div>
                        {/if}
                        {#if col === 'place'}
                            <div class="flex flex-wrap gap-6 text-xl mt-4">
                                {#if item.address}
                                    <div>
                                        <div class="uppercase text-sm opacity-40">Address</div>
                                        <div class="flex gap-2">
                                            {item.address}
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
                                    <div><span class="opacity-40 text-sm uppercase">{lk} →</span> <a href={item.links[lk]} target="_blank" class="underline hover:no-underline">{bareDomain(item.links[lk], lk)}</a></div>
                                {/each}
                            </div>
                        {/if}
                    </div>

                {#if item.registration}
                    <div class="text-xl lg:flex-nowrap mt-6 lg:mt-0">
                        <div class="w-auto rounded-lg md:text-right gap-4">
                            {#if item.registration.link}
                                <div class="pb-2">
                                    <a href={item.registration.link} class="" target="_blank">
                                        <div class="inline-block py-3 px-6 border border-pbw-red hover:bg-pbw-red hover:text-white text-pbw-red text-xl rounded-lg">
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
                                <div class="inline-block py-2 px-4 border border-gray-400 text-gray-400 text-lg rounded-lg mb-2 cursor-not-allowed">
                                    {#if item.registration.type === 'tickets'}
                                        Tickets not yet available
                                    {:else if item.registration.type === 'invites'}
                                        Application form is not yet available
                                    {/if}
                                </div>
                            {/if}
                            <div>
                                {#if item.registration.status}
                                    <div><span class="opacity-40 text-sm uppercase mr-1">Status</span> 
                                        {#if item.registration.status === 'available'}
                                            <span class="text-green-700">• Available</span>
                                        {:else if item.registration.status === 'sold-out'}
                                            <span class="text-red-700">• Sold Out!</span>
                                        {:else if item.registration.status === 'closed'}
                                        <span class="text-yellow-700">• Registration closed</span>
                                        {/if}
                                    </div>                                
                                {/if}
                                <div><span class="opacity-40 text-sm uppercase mr-1">Price</span> 
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

            <!--div class="p-2 text-xl m-6">
                <table>
                {#each Object.keys(defs.properties) as key}
                    <tr>
                        <td class="text-right pr-4 text-gray-400 align-top">{defs.properties[key]?.title || key}</td>
                        <td>
                            {#if key === 'logo'}
                                <div class="m-2">
                                    <a href={item.logo} target="_blank"><img class="w-32" src={item.logo} /></a>
                                </div>
                            {/if}
                            {#if defs.properties[key].type === 'string' && defs.properties[key].format === 'uri'}
                                <a href="{item[key]}" class="underline hover:no-underline">{item[key]}</a>
                            {:else if defs.properties[key].type === 'array'}
                                {item[key]?.join(", ")}
                                {#if defs.properties[key].items?.enum}
                                <div class="text-base">Available choices: {defs.properties[key].items.enum.join(", ")}</div>
                                {/if}
                            {:else if defs.properties[key].type === 'string' && defs.properties[key].__markdown}
                                {#if item[key]}
                                    <div class="md"><SvelteMarkdown source={item[key]} /></div>
                                {:else}
                                    ❌
                                {/if}
                            {:else if key === "links" && defs.properties[key].type === 'object' && typeof item[key] === 'object'}
                                <div>
                                    {#each Object.keys(item[key]) as lkey}
                                        <div>
                                            {lkey}: 
                                            <a class="underline hover:no-underline" target="_blank" href={item[key][lkey]}>
                                                {item[key][lkey].replace(/^https?:\/\//,'').replace(/\/$/,'')}
                                            </a>
                                        </div>
                                    {/each}
                                </div>
                            {:else}
                                {item[key] || "❌"}
                            {/if}
                            {#if defs.properties[key].enum}
                                <div class="text-base">Available choices: {defs.properties[key].enum.join(", ")}</div>
                            {/if}

                        </td>
                    </tr>
                {/each}
                </table>
            </div-->

            {#if col === "event"}
                {#if item.speakers}
                    <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Speakers ({item.speakers?.length || 0})</h2>
                    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl">
                        <CollectionList arr={item.speakers} />
                    </div>
                {/if}
                {#if item.events}
                    <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Sub-Events ({item.events?.length || 0})</h2>
                    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center">
                        <CollectionList arr={item.events} />
                    </div>
                {/if}
            {/if}
            {#if col === "union"}
                <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Big events ({item.events?.map(eId => data.bundle.events.find(e => e.id === eId)).length})</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mt-4 text-2xl text-center">
                    <CollectionList arr={item.events?.map(eId => data.bundle.events.find(e => e.id === eId))} col="event" img="logo" />
                </div>
            {/if}
            {#if col === "speaker"}
                <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Events ({data.bundle.events.filter(e => e.speakers?.find(s => s.id === item.id)).length || 0})</h2>
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl">
                    <CollectionList arr={data.bundle.events.filter(e => e.speakers?.find(s => s.id === item.id))} col="event" img="logo" />
                </div>
            {/if}

            <Footer col={col} item={item} bundle={data.bundle} />
        </div>
    </div>
</div>