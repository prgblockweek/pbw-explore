<script>
    export let arr;
    export let entry = "23";
    export let col = "speaker";
    export let img = "photoUrl";
    export let aspect = "aspect-square";

    import { format, addDays } from 'date-fns';
    import SvelteMarkdown from 'svelte-markdown';

    function formateItemDate (item) {
        let dt = format(new Date(item.date), "MMMM d")
        if (item.days > 1) {
            dt += "-" + format(addDays(new Date(item.date), item.days-1), "d")
        }
        return dt
    }

    const _url = (col, item) => `/${entry}/${col}/${item.id}`
</script>

{#each arr as item}
    <div class="p-4">
        {#if item[img]}
            <div class="w-full mb-4">
                <a href={_url(col, item)}><img src={item[img]} class="rounded-2xl w-full {aspect} object-cover" /></a>
            </div>
        {/if}
        <h3 class=" text-pbw-red"><a href={_url(col, item)}>{item.shortname || item.name}</a></h3>
        {#if col === "event"}
            <div class="text-xl text-gray-500 my-2">
                <span class="font-bold">{formateItemDate(item)}</span>
                {#if item.attendees}<br />{item.attendees}+ ppl{/if}
            </div>
        {/if}
        {#if col === "media-partner" && item.description}
            <div class="text-base text-gray-500 my-2">{item.description}</div>
        {/if}
        {#if col === "speaker" && (item.bio || item.orgs)}
            <div class="text-base text-gray-500 my-2"><SvelteMarkdown source={item.orgs || item.bio} /></div>
        {/if}
        {#if col === "union" && item.description}
            <div class="text-base text-gray-500 my-2"><SvelteMarkdown source={item.description} /></div>
        {/if}
    </div>
{/each}