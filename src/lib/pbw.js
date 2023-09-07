export const config = {
	tz: 'Europe/Berlin',
	collections: {
		places: {
			title: 'Places',
			model: 'place',
			img: 'photo'
		},
		events: {
			title: 'Events',
			model: 'event'
		},
		speakers: {
			title: 'Speakers',
			model: 'speaker',
			img: 'photoUrl',
			virtual: true
		},
		'media-partners': {
			title: 'Media Partners & Communities',
			model: 'media-partner',
			aspect: 'aspect-video'
		},
		benefits: {
			title: 'Benefits for visitors',
			model: 'benefit',
			aspect: 'aspect-video'
		},
		unions: {
			title: 'Event Unions',
			model: 'union'
		},
		chains: {
			title: 'Blockchains',
			model: 'chain'
		},
		'other-events': {
			title: 'Other events',
			model: 'other-event'
		}
	},
	eventTypeColors: {
		conference: '#d3e5ee',
		meetup: '#fdecc8',
		hackathon: '#dad7ed',
		expo: '#eee0da',
		party: '#dbeddb'
	},
	date: '2023-06-02',
	days: 10
};
