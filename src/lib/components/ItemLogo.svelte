<script>
	import makeBlockie from 'ethereum-blockies-base64';

	export let item;
	export let img = 'logo';
	export let width = 'w-10';
	export let aspect = 'aspect-square';
	export let rounded = 'rounded';
	export let thumb = null;

	/*if (width.match(/^w-48/)) {
		thumb = '500';
	}*/

	$: blockie = !item[img] && item.hash ? makeBlockie('0x' + item.hash.substr(0, 40)) : null;
</script>

{#if item[img]}
	<img
		src={thumb ? item[img].replace(/\.([^.]+)$/, `_${thumb}px.webp`) : item[img]}
		class="{width} {rounded} {aspect} object-cover dark:bg-white drop-shadow-xl z-10"
		alt={item.name}
	/>
{:else if item.hash}
	<div
		class="{width} {rounded} {aspect} object-cover dark:bg-white"
		style="background: url({blockie}); background-size: 100% 100%;"
	/>
{/if}
