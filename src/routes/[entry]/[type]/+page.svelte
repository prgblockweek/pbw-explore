<script>
    import { page } from '$app/stores';
    import { config } from '$lib/pbw';
    //import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import SvelteMarkdown from 'svelte-markdown';
    import Footer from '$lib/components/Footer.svelte';
    import EventTypeBadge from '$lib/components/EventTypeBadge.svelte';
    import { formatItemDate, bareDomain, getFlagEmoji } from '$lib/utils.js';
    import makeBlockie from 'ethereum-blockies-base64';

    export let data;

    let entry = $page.params.entry
    $: type = $page.params.type;
    $: tc = config.collections[type]
    $: items = data.bundle[type]


    function processItems(_items) {
        if (!_items) return [];
        _items = JSON.parse(JSON.stringify(_items))
        if (type === 'events') {
            _items = _items.sort((x, y) => x.date > y.date ? 1 : -1)
        }
        return _items
    }

    $: processedItems = processItems(items)

    onMount(async () => {
        if (!config.collections[$page.params.type]) {
            const ftype = Object.keys(config.collections).find(k => config.collections[k].model === $page.params.type)
            if (ftype) {
                goto(`/${$page.params.entry}/${ftype}`)
            }
        }
    })

</script>

<svelte:head>
    <title>{tc?.title} | #PBW{$page.params.entry} Inspector</title>
</svelte:head>

{#if tc}
<div class="w-full">
    <div class="max-w-7xl mx-auto pt-5 md:pt-10">
        <div class="mx-4 xl:mx-0">
            <div class="flex gap-8 mb-10">
                <h1 class="text-5xl uppercase font-bold text-pbw-red"><a href="/{$page.params.entry}">#PBW23</a></h1>
            </div>
            <div class="flex flex-wrap md:flex-nowrap w-full">
            </div>
            <h2 class="text-2xl uppercase font-bold text-gray-500">{tc.title} ({processedItems.length})</h2>
            <div class="text-xl mt-6">  
                <table class="w-full">
                    <thead>
                        <tr class="text-left">
                            {#if type === 'events'}
                                <th class="text-right pr-4">📅</th>
                                <th></th>
                                <th>Name</th>
                                <th>📍</th>
                                <th>👥</th>
                            {/if}
                            {#if type === 'speakers'}
                                <th></th>
                                <th>Name</th>
                                <th>🌎</th>
                                <th>🐦</th>
                                <th>Bio</th>
                            {/if}
                            {#if type === 'media-partners'}
                                <th></th>
                                <th>Name</th>
                                <th>🌎</th>
                                <th>Description</th>
                            {/if}
                            {#if type === 'benefits'}
                                <th></th>
                                <th>Name</th>
                            {/if}
                        </tr>
                    </thead>
                    <tbody>
                        {#each processedItems as item}
                            <tr class="">
                                {#if type === 'events'}
                                    <td class="text-right pr-4">{formatItemDate(item)}</td>
                                    <td class="w-14">
                                        <a href="/{entry}/{tc.model}/{item.id}">
                                            {#if item.logo}
                                                <img src={item.logo} class="w-10 rounded aspect-square object-cover" />
                                            {:else if item.types && item.types[0]}
                                                <!--div class="w-10 h-10 pt-2 rounded" style="background-color: {config.eventTypeColors[item.types[0]]};"></div-->
                                                <div class="w-10 h-10 pt-2 rounded" style="background: url({makeBlockie('0x'+item.hash.substr(0,40))}); background-size: 100% 100%;"></div>
                                            {/if}
                                        </a>
                                    </td>
                                    <td class="text-2xl flex items-center h-12">
                                        <div class=""><a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline">{item.name}</a></div>
                                        <div class="flex gap-1 items-center ml-4">
                                            {#each item.types as type}
                                                <EventTypeBadge {type} />
                                            {/each}
                                        </div>
                                    </td>
                                    <td>
                                        {#if item.venueUrl}
                                            <a href={item.venueUrl} class="underline hover:no-underline">{item.venueName}</a>
                                        {:else}
                                            {#if item.venueName && item.venueName !== "TBA"}{item.venueName}{:else}<span class="opacity-20">TBA</span>{/if}
                                        {/if}
                                    </td>
                                    <td>{#if item.attendees}{item.attendees}{:else}<span class="opacity-20">TBA</span>{/if}</td>
                                    <td>
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
                                    <td class="w-14">
                                        <img src={item.photoUrl} class="w-10 inline-block rounded aspect-square object-cover" />
                                    </td>
                                    <td class="text-2xl h-12">
                                        <a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline">{item.name}</a>
                                    </td>
                                    <td>{item.country && item.country !== 'xx' ? getFlagEmoji(item.country, false) : ''}</td>
                                    <td>
                                        {#if item.twitter}
                                            @<a href="https://twitter.com/{item.twitter}" class="underline hover:no-underline">{item.twitter}</a>
                                        {/if}
                                    </td>
                                    <td><SvelteMarkdown source={item.caption} /></td>
                                {/if}
                                {#if type === 'media-partners'}
                                    <td class="w-20">
                                        <img src={item.logo} class="w-16 inline-block rounded aspect-[16/9] object-cover" />
                                    </td>
                                    <td class="text-2xl h-12">
                                        <a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline">{item.name}</a>
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
                                    <td class="">
                                        <SvelteMarkdown source={item.description} />
                                    </td>   
                                {/if}    
                                {#if type === 'benefits'}
                                    <td class="w-14">
                                        <img src={item.logo} class="w-10 inline-block rounded aspect-square object-cover" />
                                    </td>
                                    <td class="text-2xl h-12">
                                        <a href="/{entry}/{tc.model}/{item.id}" class="text-pbw-red hover:underline">{item.name}</a>
                                    </td>
                                {/if}                                
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <Footer bundle={data.bundle} />
        </div>
    </div>
</div>
{/if}

<style>
    table tbody tr:hover { background-color: #fff5d2; }
</style>