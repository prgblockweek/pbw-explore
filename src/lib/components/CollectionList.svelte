<script>
    export let arr;
    export let entry = "23";
    export let col = "speaker";
    export let img = "photoUrl";
    export let aspect = "aspect-square";
    export let size = "normal";

    import SvelteMarkdown from 'svelte-markdown';
    import { formatItemDate } from '$lib/utils.js';

    const _url = (col, item) => `/${entry}/${col}/${item.id}`
</script>

{#each arr as item}
    <div class="{size === "small" ? "p-0.5 lg:p-1" : "p-1 lg:p-1.5"} hover:bg-pbw-yellow/30 {size==="small" ? "rounded-lg" : "rounded-2xl"}">
        {#if item[img]}
            <div class="w-full relative">
                {#if col === "benefit"}
                    <div class="absolute top-3 -left-4">
                        <div class="bg-pbw-red py-0.5 px-1.5 rounded-md text-white uppercase text-base">{item.slogan}</div>
                    </div>
                {/if}
                <a href={_url(col, item)}>
                    <img src={item[img]} alt={item.name} class="{size === "small" ? "rounded-lg" : "rounded-2xl"} w-full {aspect} object-cover" />
                </a>
            </div>
        {/if}
        {#if col !== "media-partner"}
            <div class="mt-2">
                <h3 class=" text-pbw-red"><a href={_url(col, item)}>{item.shortname || item.name}</a></h3>
                {#if col === "event"}
                    <div class="text-xl text-gray-500 my-2">
                        <span class="font-bold">{formatItemDate(item)}</span>
                        {#if item.attendees}<br />{item.attendees}+ ppl{/if}
                    </div>
                {/if}
                {#if col === "media-partner"}
                    <div class="text-base text-gray-500 my-2">{item.description}</div>
                {/if}
                {#if col === "speaker"}
                    <div class="text-base text-gray-500 my-2"><SvelteMarkdown source={item.caption} /></div>
                {/if}
                {#if col === "union"}
                    <div class="text-base text-gray-500 my-2"><SvelteMarkdown source={item.description} /></div>
                {/if}
            </div>
        {/if}
    </div>
{/each}