import localData from '$lib/data.json';

export async function load(entry = '24', host = null) {
	let data = null;

	if (host === 'localhost') {
		data = localData;
	} else {
		const resp = await fetch(
			`https://duplicity6-sulfur-objet0-air1.protocol.berlin/${entry}/index.json`
		);
		data = await resp.json();
	}
	data.events.sort((a, b) => ((a.attendees || 0) < (b.attendees || 0) ? 1 : -1));
	//console.log(data.events)
	data.speakers = [];
	for (const event of data.events) {
		if (!event.speakers) continue;
		for (const speaker of event.speakers) {
			if (!speaker.name) continue;
			speaker.events = [event.id];
			data.speakers.push(speaker);
		}
	}
	return data;
}

export async function loadSchema(host) {
	const resp = await fetch(
		`https://duplicity6-sulfur-objet0-air1.protocol.berlin/schema/1/bundle.json`
	);
	return resp.json();
}
