<script>
	import { page } from '$app/stores';

	export let path;
	export let type;
</script>

<div class="w-full dark:text-gray-400 bg-pbw-red">
	<div class="max-w-7xl mx-auto pt-5 md:pt-10">
		<div class="mx-4 xl:mx-0">
			<div class="flex gap-8 pb-6">
				<h1 class="text-4xl md:text-5xl font-bold text-pbw-white">
					<a href="/{$page.params.entry}">#PBW23</a><a
						href="/{$page.params.entry}{path ? '/' + path : ''}"
						><span class="text-pbw-yellow">.{type}</span></a
					>
				</h1>
			</div>
		</div>
	</div>
</div>
