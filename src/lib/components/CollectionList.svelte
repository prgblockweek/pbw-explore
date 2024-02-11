<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { formatItemDate } from '$lib/utils.js';
	import ItemLogo from '$lib/components/ItemLogo.svelte';

	export let arr;
	export let entry = '24';
	export let col = 'speaker';
	export let img = 'photoUrl';
	export let aspect = 'aspect-square';
	export let size = 'normal';
	export let circle = false;
	export let offer = false;
	export let bundle = null;
	export let thumb = null;

	function findObject(it) {
		if (!bundle) {
			return it;
		}
		if (col === 'speaker' && !it.name) {
			let found = null;
			for (const e of bundle.events) {
				if (!e.speakers) continue;
				found = e.speakers.find((s) => {
					return s.id === it.id && s.name;
				});
				if (found) break;
			}
			Object.assign(it, found || {});
		}
		return it;
	}

	const _url = (col, item) => (item.hidden ? '' : `/${entry}/${col}/${item.id}`);
</script>

{#each arr.map((k) => findObject(k)) as item}
	<div
		class="{size === 'small' ? 'p-0.5 lg:p-1' : 'p-1 lg:p-1.5'} {!item.hidden
			? 'hover:bg-bbw-yellow/20 dark:hover:bg-bbw-white/10'
			: ''} {size === 'small' ? 'rounded-lg' : 'rounded-2xl'}"
	>
		<div class="w-full relative">
			{#if col === 'benefit'}
				<div class="absolute top-3 -left-2.5 z-50">
					<div class="bg-bbw-navy py-0.5 px-1.5 rounded-md text-white uppercase text-base">
						{item.slogan}
					</div>
				</div>
			{/if}

			<a href={_url(col, item)}>
				<ItemLogo
					{item}
					{thumb}
					width="w-full"
					{aspect}
					{img}
					rounded={circle ? 'rounded-full' : size === 'small' ? 'rounded-lg' : 'rounded-2xl'}
				/>
			</a>
		</div>
		{#if col !== 'media-partner'}
			<div class="mt-2">
				{#if item.hidden}
					{item.shortname || item.name}*
				{:else}
					<h3 class=" text-bbw-navy">
						<a href={_url(col, item)} class="hover:underline">{item.shortname || item.name}</a>
					</h3>
				{/if}
				{#if col === 'event'}
					<div class="text-xl bbw-text-color-secondary  my-2">
						<span class="font-bold">{formatItemDate(item)}</span>
						{#if item.attendees}<br />{item.attendees} ppl{/if}
					</div>
				{/if}
				{#if col === 'media-partner'}
					<div class="text-base bbw-text-color-secondary my-2">{item.description}</div>
				{/if}
				{#if col === 'speaker'}
					<div class="text-base bbw-text-color-secondary my-2 break-words">
						<SvelteMarkdown source={item.caption} />
					</div>
				{/if}
				{#if col === 'union'}
					<div class="text-base bbw-text-color-secondary my-2 break-words">
						<SvelteMarkdown source={item.description} />
					</div>
				{/if}
				{#if col === 'place'}
					<div class="text-xl bbw-text-color-secondary my-2">{item.capacity} ppl</div>
				{/if}
			</div>
		{/if}
	</div>
{/each}
{#if offer}
	<div class="flex text-gray-400 dark:text-gray-200 self-start {col === 'event' ? 'mt-8' : ''}">
		<div class="p-4">
			<div class="text-6xl">+</div>
			<div>
				{#if col === 'event'}<a
						href="https://github.com/blockchainweek/data/issues/new/choose"
						target="_blank"
						class="underline hover:no-underline"
						rel="noreferrer">Submit your own event!</a
					>{/if}
				{#if col === 'speaker'}<a
						href="https://github.com/blockchainweek/data/issues/new/choose"
						target="_blank"
						class="underline hover:no-underline"
						rel="noreferrer">Submit a missing speaker!</a
					>{/if}
				{#if col === 'place'}<a
						href="https://github.com/blockchainweek/data/issues/new/choose"
						class="underline hover:no-underline">Offer your own venue!</a
					>{/if}
			</div>
		</div>
	</div>
{/if}
