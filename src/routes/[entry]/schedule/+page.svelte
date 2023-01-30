<script>
	import { page } from '$app/stores';
	import TimelineHeatmap from '$lib/components/TimelineHeatmap.svelte';
	import CalendarList from '$lib/components/CalendarList.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { config } from '$lib/pbw';

	import { format, compareAsc, addDays } from 'date-fns';

	export let data;

	function makeDaysSegments(events) {
		const days = [];
		for (let i = 0; i < config.days; i++) {
			const date = format(addDays(new Date(config.date), i), 'yyyy-MM-dd');
			//console.log(date)
			const query = {
				start: date + 'T00:00',
				end: date + 'T23:59'
			};
			let arr = [];
			for (const ev of events) {
				for (const sg of ev.segments) {
					if (
						!(
							compareAsc(new Date(sg.startTime), new Date(query.end)) <= 0 &&
							compareAsc(new Date(sg.startTime), new Date(query.start)) >= 0
						)
					) {
						continue;
					}

					arr.push({
						startTime: sg.startTime,
						endTime: sg.endTime,
						event: ev,
						title: sg.title,
						venues: sg.venues || ev.venues || false
					});
				}
			}
			arr = arr.sort((x, y) => {
				return x.startTime > y.startTime ? 1 : -1;
			});
			days.push({ date, segments: arr });
		}
		return days;
	}

	$: days = makeDaysSegments(data.bundle.events);
</script>

<svelte:head>
	<title>Schedule | #PBW{$page.params.entry} Explore</title>
</svelte:head>

<div class="w-full">
	<div class="max-w-7xl mx-auto pt-5 md:pt-10">
		<div class="mx-4 xl:mx-0">
			<div class="flex gap-8 mb-6 md:mb-10">
				<h1 class="text-4xl md:text-5xl font-bold text-pbw-red">
					<a href="/{$page.params.entry}">#PBW23</a><span class="text-pbw-yellow">.schedule</span>
				</h1>
			</div>

			<TimelineHeatmap {data} highlightDay={$page.params.date} />
			{#each days as day}
				<div class="mb-14">
					<h2 class="text-3xl md:text-3xl">
						<a href="/{$page.params.entry}/day/{day.date}" class=" text-pbw-red hover:underline"
							>{format(new Date(day.date), 'MMMM d, yyyy')}</a
						>
						- {format(new Date(day.date), 'EEEE')}
					</h2>
					<div class="mt-6">
						<CalendarList
							date={$page.params.date}
							segments={day.segments}
							entry={$page.params.entry}
							bundle={data.bundle}
						/>
					</div>
				</div>
			{/each}
			<Footer bundle={data.bundle} />
		</div>
	</div>
</div>
