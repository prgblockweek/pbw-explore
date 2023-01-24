
<script>
    import CollectionList from '$lib/CollectionList.svelte';
    import { page } from '$app/stores';

    function makeSpeakers (data) {
        const arr = []
        for (const ev of data.bundle.events) {
            if (!ev.speakers) continue;
            for (const speaker of ev.speakers) {
                speaker.events = [ev.id]
                arr.push(speaker)
            }
        }
        return arr
    }

    export let data;
    $: speakers = makeSpeakers(data)
    $: entry = $page.params.entry
</script>

<div class="w-full px-6 xl:mx-0">
    <div class="max-w-7xl mx-auto pt-2 md:pt-7">
        <h2 class="text-2xl uppercase font-bold text-gray-500">Unions ({data.bundle.unions.length})</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl">
            <CollectionList arr={data.bundle.unions} img="logo" col="union" entry={entry} />
        </div>
        <h2 class="text-2xl uppercase font-bold text-gray-500">Events ({data.bundle.events.length})</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl">
            <CollectionList arr={data.bundle.events} img="logo" col="event" entry={entry}/>
        </div>
        <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">Speakers ({speakers.length})</h2>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 my-6 text-center text-xl">
            <CollectionList arr={speakers} entry={entry} />
        </div>
    </div>
</div>