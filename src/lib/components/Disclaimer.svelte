<script>
    export let type = "events";
</script>

<div class="mt-4 mb-8 text-xl bg-pbw-yellow/20 dark:bg-gray-700 p-4 pbw-text-color-secondary">
    {#if type === 'events'}
        ⚠️ All events published here are independent and have their own organisers. Prague Blockchain Week is an independent initiative that informs about these events.
If you want information about tickets, or to contact the organizers of a specific event - then contact them directly.
    {/if}
    {#if type === 'speakers'}
        ⚠️ All these people are guests of the individual events, which have their own organizers and have no direct connection to Prague Blockchain Week.
    {/if}
</div>