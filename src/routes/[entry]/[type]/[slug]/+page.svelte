<script>
    export let data;
    import { page } from '$app/stores';
    import CollectionList from '$lib/CollectionList.svelte';
    import SvelteMarkdown from 'svelte-markdown';

    const colsDef = {
        union: "unions",
        event: "events",
        speaker: "speakers",
        "media-partner": "media-partners",
        benefit: "benefits",
    }

    $: col = $page.params.type
    $: colPlural = colsDef[col]
    $: item = data.bundle[colPlural].find(e => e.id === $page.params.slug)
    $: defs = data.schema ? data.schema.definitions[col] : {}

    let showSource = false;
</script>

<svelte:head>
    <title>{item.name} | PBW Inspector</title>
</svelte:head>

<div class="w-full mx-6 xl:mx-0">
    <div class="max-w-7xl mx-auto pt-5 md:pt-10">
        <div class="flex gap-8">
            <h1 class="text-5xl uppercase font-bold text-pbw-red"><a href="/{$page.params.entry}">#PBW23</a></h1>
            <div>
                <div class="font-normal text opacity-50" style="line-height: 0.6em;">{col.toUpperCase()}</div>
                <h2 class="text-4xl font-bold text-gray-600">{item.name}</h2>
           </div>
        </div>
        <div class="p-2 text-xl m-6">
            <table>
            {#each Object.keys(defs.properties) as key}
                <tr>
                    <td class="text-right pr-4 text-gray-400">{defs.properties[key]?.title || key}</td>
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
        </div>

        {#if col === "event"}
            <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Speakers ({item.speakers?.length || 0})</h2>
            {#if item.speakers}
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center">
                    <CollectionList arr={item.speakers} />
                </div>
            {:else}
                <div class="my-4">No speakers yet.</div>
            {/if}
        {/if}
        {#if col === "union"}
            <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Big events ({data.bundle.events.filter(e => e.union === item.id).length})</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mt-4 text-2xl text-center">
                <CollectionList arr={data.bundle.events.filter(e => e.union === item.id)} col="event" img="logo" />
            </div>
        {/if}

        <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500 mb-4">Source code / Edit</h2>
        <div>
            <a href="#" class="underline hover:no-underline" on:click={() => { showSource = !showSource; }}>Show/Hide source</a>, 
            <a href="https://github.com/utxo-foundation/prague-blockchain-week/tree/main/data/23/events/{item.id}" class="underline hover:no-underline">Edit on GitHub</a>
        </div>
        {#if showSource}
            <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">JSON source-code</h2>
            <div class="mt-4 font-mono whitespace-pre-wrap p-4 rounded-md bg-slate-200 text-sm">{JSON.stringify(item, null, 2)}</div>
        {/if}
    </div>
</div>