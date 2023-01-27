<script>
    export let data;
    import { page } from '$app/stores';
    import CollectionList from '$lib/components/CollectionList.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import SvelteMarkdown from 'svelte-markdown';
    import { formatItemDate, bareDomain, getFlagEmoji } from '$lib/utils.js';

    const colsDef = {
        union: "unions",
        event: "events",
        speaker: "speakers",
        "media-partner": "media-partners",
        benefit: "benefits",
    }

    const langMapper = {
        czech: 'cz',
        slovak: 'sk',
        english: 'gb'
    }

    const speakerLinks = {
        twitter: { col: x => x.twitter ? 'https://twitter.com/'+x.twitter : null },
        web: { col: x => x.web?.url },
        linkedin: { col: x => x.linkedin ? 'https://linkedin.com/in/'+x.linkedin : null }
    }

    $: col = $page.params.type
    $: colPlural = colsDef[col]
    $: item = data.bundle[colPlural].find(e => e.id === $page.params.slug)
    $: defs = data.schema ? data.schema.definitions[col] : {}
</script>

<svelte:head>
    <title>{item.name} | PBW Inspector</title>
</svelte:head>

<div class="w-full">
    <div class="max-w-7xl mx-auto pt-5 md:pt-10">
        <div class="mx-4 2xl:mx-0">
            <div class="flex gap-8 mb-10">
                <h1 class="text-5xl uppercase font-bold text-pbw-red"><a href="/{$page.params.entry}">#PBW23</a></h1>
            </div>
            <div class="md:flex flex-wrap mb-4">
                {#if item.logo}
                    <div class="w-48 md:w-24 mr-5">
                        <img src={item.logo} class="rounded-xl" alt={item.name} />
                    </div>
                {/if}
                {#if item.photoUrl}
                    <div class="w-48 mr-5">
                        <img src={item.photoUrl} class="rounded-xl" alt={item.name} />
                    </div>
                {/if}
                <div>
                    <div class="font-normal text opacity-50 mt-4 md:mt-0" style="line-height: 0.6em;">{col.toUpperCase()}</div>
                    <h2 class="text-5xl font-bold text-gray-600">{item.name}</h2>
                    {#if col === 'event'}
                        <div class="text-2xl flex gap-4 mt-2 flex-wrap">
                            <div class="flex gap-1 items-center">
                                {#each item.types as type}
                                    <div class="text-sm uppercase text-white bg-pbw-red rounded px-1.5 py-0.5">{type}</div>
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
                        <div class="text-2xl mt-2">
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
            </div>
            </div>

            {#if item.desc || item.description}
                <div class="mt-4 text-xl">
                    <div><SvelteMarkdown source={item.desc || item.description} /></div>
                </div>
            {/if}
            {#if col === 'event'}
                <div class="flex flex-wrap gap-6 text-xl mt-4">
                    <div><div class="uppercase text-sm opacity-40">Organizator</div><SvelteMarkdown source={item.org || 'TBD'} /></div>
                    {#if item.languages}
                        <div>
                            <div class="uppercase text-sm opacity-40">Languages</div>
                            <div class="flex gap-2">
                                {#each item.languages as lang}
                                    <div>{getFlagEmoji(langMapper[lang])} {lang}</div>
                                {/each}
                            </div>
                        </div>
                    {/if}
                    {#if item.chains}
                        <div>
                            <div class="uppercase text-sm opacity-40">Chains</div>
                            <div class="flex gap-2">
                                {#each item.chains as chain}
                                    <div>{chain.substr(0, 1).toUpperCase() + chain.substr(1)}</div>
                                {/each}
                            </div>
                        </div>
                    {/if}
                    {#if item.tags}
                        <div>
                            <div class="uppercase text-sm opacity-40">Tags</div>
                            <div class="flex gap-2">
                                {#each item.tags as tag}
                                    <div>#{tag}</div>
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