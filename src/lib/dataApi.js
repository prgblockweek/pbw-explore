import localData from "$lib/data.json";

export async function load(entry = "23", host = null) {
  let data = null;
  if (host === "localhost") {
    data = localData;
  } else {
    const resp = await fetch(
      `https://data.prgblockweek.com/${entry}/index.json`,
    );
    data = await resp.json();
  }
  data.speakers = [];
  for (const event of data.events) {
    if (!event.speakers) continue;
    for (const speaker of event.speakers) {
      speaker.events = [event.id];
      data.speakers.push(speaker);
    }
  }
  return data;
}

export async function loadSchema() {
  const resp = await fetch(
    "https://data.prgblockweek.com/schema/1/bundle.json",
  );
  return resp.json();
}
