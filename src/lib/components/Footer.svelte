<script>
    export let item;
    export let col;

    let showSource = false;
</script>


<div class="mt-20">
    <div class="bg-gray-100 p-4 text-lg text-gray-600">
        <div>⚙ This page is automatically generated using the #PBW23 dataset which can be found at <a href="https://data.prgblockweek.com/23/index.json" class="underline hover:no-underline" target="_blank">data.prgblockweek.com</a>.
            <br />📖 The source data is hosted in the GitHub repository <a href="https://github.com/utxo-foundation/prague-blockchain-week" class="underline hover:no-underline" target="_blank">utxo-foundation/prague-blockchain-week</a>.
            Go ahead and do PRs!
        </div>
        {#if item}
            <div class="mt-4">
                <div class="mt-2">
                    <a href="" class="text-gray-400">[{col}:{item.id}]</a> &nbsp; <a href="https://github.com/utxo-foundation/prague-blockchain-week/tree/main/data/23/events/{item.id}" class="underline hover:no-underline" target="_blank">Show on GitHub</a>
                    - <button class="cursor-pointer underline hover:no-underline" on:click={() => { showSource = !showSource; return false; }}>Toggle JSON source</button>
                </div>   
                {#if showSource}
                    <h2 class="text-2xl uppercase font-bold mt-10 text-gray-500">JSON source-code</h2>
                    <div class="mt-4 font-mono whitespace-pre-wrap p-4 rounded-md bg-slate-200 text-sm">{JSON.stringify(item, null, 2)}</div>
                {/if}
            </div>
        {/if}
    </div>
</div>