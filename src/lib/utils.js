import { format, addDays } from 'date-fns';

const langMapper = {
	czech: 'cz',
	slovak: 'sk',
	german: 'de',
	english: 'gb'
};

export function formatItemDate(item, opts = {}) {
	let dt = format(new Date(item.date), 'MMMM d' + (opts.full && item.days === 1 ? ', yyyy' : ''));
	if (item.days > 1) {
		dt +=
			'-' + format(addDays(new Date(item.date), item.days - 1), 'd' + (opts.full ? ', yyyy' : ''));
	}
	return dt;
}

export function bareDomain(link, type = '') {
	let out = link
		.replace(
			/https?:\/\/(twitter\.com\/|t\.me\/|www\.youtube\.com\/c\/|linkedin\.com\/in\/|www\.|)/g,
			''
		)
		.replace(/\/$/, '');
	if (['twitter', 'telegram', 'youtube'].includes(type)) {
		out = '@' + out;
	}
	return out;
}

export function getFlagEmoji(str, mapper = true) {
	const codePoints = (mapper ? langMapper[str] : str)
		.toUpperCase()
		.split('')
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function processItemsList(arr) {
	const out = [];
	const ids = [];
	for (const sp of arr) {
		// filter out duplicates
		if (ids.includes(sp.id)) {
			continue;
		}
		out.push(sp);
		ids.push(sp.id);
	}
	return out;
}
