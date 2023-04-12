
const backend_base = 'https://todolist-zsb7.api.codehooks.io/dev'
const token = await getToken({template: "codehooks"});

export async function get(url) {
    const promise = await fetch(backend_base + url,
    {
        'method': 'GET',
        'headers': {
            'x-api-key': 'a0ad972b-1710-4187-ac7f-bdd030d9d462',
            'Authorization': 'Bearer' + token
        }
    })
    const results = await promise.json()
    return results
}