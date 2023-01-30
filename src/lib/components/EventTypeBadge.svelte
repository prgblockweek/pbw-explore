<script>
	import { config } from '$lib/pbw.js';
	export let type = 'conference';
</script>

<div
	class="text-sm uppercase rounded px-1.5 py-0.5 text-black"
	style="background-color: {config.eventTypeColors[type]};"
>
	{type}
</div>
