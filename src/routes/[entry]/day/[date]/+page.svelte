<script>
    import { page } from '$app/stores';
    import TimelineHeatmap from '$lib/components/TimelineHeatmap.svelte';
    import CalendarList from '$lib/components/CalendarList.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import { format, compareAsc } from 'date-fns';

    export let data;

    function makeSegments (events, date) {
        const query = {
            start: date+"T00:00",
            end: date+"T23:59"
        }
        let arr = []
        for (const ev of events) {
            for (const sg of ev.segments) {
                if (!(compareAsc(new Date(sg.startTime), new Date(query.end)) <= 0
                        && compareAsc(new Date(sg.startTime), new Date(query.start)) >= 0)) {
                    continue;
                }

                arr.push({
                    startTime: sg.startTime,
                    endTime: sg.endTime,
                    event: ev,
                    title: sg.title,
                    venues: sg.venues || ev.venues || false,
                })
            }
        }
        return arr.sort((x, y) => {
            return x.startTime > y.startTime ? 1 : -1
        })
    }

    $: segments = makeSegments(data.bundle.events, $page.params.date)
</script>

<svelte:head>
    <title>{format(new Date($page.params.date), "EEEE MMMM d, yyyy")} | #PBW{$page.params.entry} Explore</title>
</svelte:head>

<div class="w-full">
    <div class="max-w-7xl mx-auto pt-5 md:pt-10">
        <div class="mx-4 xl:mx-0">
            <div class="flex gap-8 mb-6 md:mb-10">
                <h1 class="text-4xl md:text-5xl font-bold text-pbw-red"><a href="/{$page.params.entry}">#PBW23</a><a href="/{$page.params.entry}/schedule"><span class="text-pbw-yellow">.day</span></a></h1>
            </div>
        
            <TimelineHeatmap {data} highlightDay={$page.params.date} />
            <h2 class="text-3xl md:text-4xl font-bold text-gray-600">{format(new Date($page.params.date), "MMMM d, yyyy - EEEE")}</h2>
            <div class="mt-10">
                <CalendarList date={$page.params.date} segments={segments} entry={$page.params.entry} bundle={data.bundle} />
            </div>
            <Footer bundle={data.bundle} />
        </div>
    </div>
</div>