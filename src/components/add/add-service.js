import { Config } from "../config/config.js"
import { HttpClient } from "../http/http-client.js"

export class ProductService {
    #httpClient = null

    constructor() {
        this.#httpClient = new HttpClient()
    }

    async addOne() {
        const payload = await this.#httpClient.get(
            Config.API_ROUTES.post('one_product')
        )
    }
}