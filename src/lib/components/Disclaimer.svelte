<script>
	export let type = 'events';
</script>

<div class="mt-4 mb-8 text-xl pbw-text-color-secondary">
	{#if type === 'events'}
		⚠️ All events published here are independent and have their own organisers. #PBW23 is an
		independent initiative that informs about these events.
	{/if}
	{#if type === 'speakers'}
		⚠️ All these people are guests of the individual events, which have their own organizers and
		have no direct connection to Prague Blockchain Week.
	{/if}
</div>
