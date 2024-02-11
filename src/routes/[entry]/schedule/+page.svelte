<script>
	import { page } from '$app/stores';
	import TimelineHeatmap from '$lib/components/TimelineHeatmap.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';
	import CalendarList from '$lib/components/CalendarList.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { config } from '$lib/bbw';

	import { format, compareAsc, addDays } from 'date-fns';

	export let data;

	function makeDaysSegments(events) {
		const days = [];
		for (let i = 0; i < config.days; i++) {
			const date = format(addDays(new Date(config.date), i), 'yyyy-MM-dd');
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
	<title>Schedule | Berlin Blockchain Week 20{$page.params.entry}</title>
</svelte:head>

<Header path={false} type="schedule" />

<div class="w-full">
	<div class="max-w-7xl mx-auto pt-5 md:pt-10">
		<div class="mx-4 xl:mx-0">
			<TimelineHeatmap {data} highlightDay={$page.params.date} />
			{#each days as day}
				<div class="mb-14">
					<h2 class="text-3xl md:text-3xl">
						<a href="/{$page.params.entry}/day/{day.date}" class=" text-bbw-navy hover:underline"
							>{format(new Date(day.date), 'MMMM d, yyyy')}</a
						>
						<span class="bbw-text-color-primary">- {format(new Date(day.date), 'EEEE')}</span>
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
			<Disclaimer type="events" />
		</div>
	</div>
</div>

<Footer bundle={data.bundle} />
