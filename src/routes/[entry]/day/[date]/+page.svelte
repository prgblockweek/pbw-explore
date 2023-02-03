<script>
	import { page } from '$app/stores';
	import TimelineHeatmap from '$lib/components/TimelineHeatmap.svelte';
	import CalendarList from '$lib/components/CalendarList.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import DisclaimerHidden from '$lib/components/DisclaimerHidden.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';

	import { format, compareAsc } from 'date-fns';

	export let data;

	function makeSegments(events, date) {
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
		return arr.sort((x, y) => {
			return x.startTime > y.startTime ? 1 : -1;
		});
	}

	$: segments = makeSegments(data.bundle.events, $page.params.date);
	$: relatedEvents = makeSegments(data.bundle['other-events'], $page.params.date);

	$: haveHiddenEvents = (() => {
		for (const s of segments) {
			if (s.event && s.event.hidden) {
				return true;
			}
		}
		return false;
	})();
</script>

<svelte:head>
	<title
		>{format(new Date($page.params.date), 'EEEE MMMM d, yyyy')} | #PBW{$page.params.entry} Explore</title
	>
</svelte:head>

<Header path="schedule" type="day" />
<div class="w-full">
	<div class="max-w-7xl mx-auto pt-5 md:pt-10">
		<div class="mx-4 xl:mx-0">
			<TimelineHeatmap {data} highlightDay={$page.params.date} />
			<h2 class="text-3xl md:text-4xl font-bold pbw-text-color-primary">
				{format(new Date($page.params.date), 'MMMM d, yyyy - EEEE')}
			</h2>
			<div class="mt-10 mb-12">
				<CalendarList
					date={$page.params.date}
					{segments}
					entry={$page.params.entry}
					bundle={data.bundle}
				/>
			</div>
			<div class="sm:ml-6">
				{#if haveHiddenEvents}
					<DisclaimerHidden />
				{/if}
			</div>

			{#if relatedEvents && relatedEvents.length > 0}
				<h2 class="text-2xl uppercase font-bold pbw-text-color-secondary mt-10">Other events</h2>
				<div class="mt-4 mb-12">
					<CalendarList
						date={$page.params.date}
						col="other-event"
						segments={relatedEvents}
						entry={$page.params.entry}
						bundle={data.bundle}
					/>
				</div>
			{/if}

			<Disclaimer type="events" />
		</div>
	</div>
</div>
<Footer bundle={data.bundle} />
