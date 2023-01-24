<script>
    export let arr;
    export let entry = "23";
    export let col = "speaker";
    export let img = "photoUrl";
    export let aspect = "aspect-square";

    import { format, addDays } from 'date-fns';

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
                <a href={_url(col, item)}><img src={item[img]} class="rounded-3xl w-full {aspect} object-cover" /></a>
            </div>
        {/if}
        <h3 class=" text-pbw-red"><a href={_url(col, item)}>{item.shortname || item.name}</a></h3>
        {#if col === "event"}
            <div class="text-xl text-gray-500 my-2">
                <span class="font-bold">{formateItemDate(item)}</span><br />{item.attendees}+ ppl
            </div>
        {/if}
        {#if col === "media-partner"}
            <div class="text-lg text-gray-500 my-2">{item.description}</div>
        {/if}
    </div>
{/each}