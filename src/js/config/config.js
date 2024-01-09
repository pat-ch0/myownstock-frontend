export class Config {
    static #API_ROUTES = new Map ([
        ['all_product', 'http://localhost:8080/products']
    ])
    static get API_ROUTES() {
        return Config.#API_ROUTES
    }
}