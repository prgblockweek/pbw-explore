<script>
	import { dataset_dev } from "svelte/internal";

    import { formatDistanceToNow } from "date-fns";

    export let item;
    export let col;
    export let bundle;

    let showSource = false;
</script>


<div class="mt-20">
    <div class="bg-gray-100 p-4 text-lg text-gray-600">
        <div>⚙ This page is automatically generated using the structured dataset which can be consumed as a single JSON file → <a href="https://data.prgblockweek.com/23/index.json" class="underline hover:no-underline" target="_blank">data.prgblockweek.com/23/index.json</a>.
            <div class="h-4"></div>
            📖 The source data GitHub repository → <a href="https://github.com/utxo-foundation/prague-blockchain-week" class="underline hover:no-underline" target="_blank">utxo-foundation/prague-blockchain-week</a>.
            Go ahead and do PRs!
        </div>
    </div>
    {#if bundle}
        <div class="mt-4 text-gray-400">
            <div class="mt-2">
                Last update: <a href="https://github.com/utxo-foundation/prague-blockchain-week/commits/main" target="_blank" class="underline hover:no-underline">{formatDistanceToNow(new Date(bundle.time))} ago</a>
                {#if item}
                    &nbsp;|&nbsp; ID: <a href="https://github.com/utxo-foundation/prague-blockchain-week/tree/main/data/23/events/{item.id}" class="underline hover:no-underline" target="_blank">{item.id}</a> [{col}]
                    &nbsp;|&nbsp; <button class="cursor-pointer underline hover:no-underline" on:click={() => { showSource = !showSource; return false; }}>Toggle JSON source</button>
                {/if}
            </div>   
            {#if showSource}
                <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">JSON source-code</h2>
                <div class="mt-4 font-mono whitespace-pre-wrap p-4 rounded-md bg-slate-200 text-sm text-black">{JSON.stringify(item, null, 2)}</div>
            {/if}
        </div>
    {/if}
</div>