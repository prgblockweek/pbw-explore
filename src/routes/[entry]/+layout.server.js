import * as dataApi from '$lib/dataApi';

export async function load({params}) {
    return {
        bundle: await dataApi.load(params.entry),
        schema: await dataApi.loadSchema()
    }
}