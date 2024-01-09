export class HttpClient {
    async get(uri, observeResponse = false) {
        const response = fetch(uri)
        if (observeResponse) {
            return response
        }

        return response.then((body) => body.json())
    }
}