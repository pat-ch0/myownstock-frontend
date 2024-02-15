import { HttpClient } from "../http/http-client.js"
import { ProductDeserializer } from "./product-deserializer.js"

export class ProductService {
    /**
     * Name of the localStorage key
     * @var string
     */
    #productKey = 'products'
    #httpClient = null

    constructor() {
        this.#httpClient = new HttpClient()
    }
    /**
     * Returns all products for the defined key
     * @returns array
     */
    async findAll() {
        /* const response = await fetch(`http://localhost:8080/${this.#productKey}`);
        const data = await response.json();
            
        return ProductDeserializer.deserializeArray(data); // json to product object */
        
        const payload = await this.#httpClient.get(
            Config.API_ROUTES.get('all_product')
        )
        
        return ProductDeserializer.deserializeArray(payload)
    }

    findOne(id) {}

    add(item) {}

    remove(item) {}
}