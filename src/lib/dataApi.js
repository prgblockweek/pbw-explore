export async function load(entry="23") {
    const resp = await fetch(`https://data.prgblockweek.com/${entry}/index.json`)
    return resp.json()
}

export async function loadSchema() {
    const resp = await fetch("https://data.prgblockweek.com/schema/1/bundle.json")
    return resp.json() 
}