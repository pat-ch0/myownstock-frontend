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
        const payload = await this.#httpClient.get('http://localhost:8080/products')
        
        return ProductDeserializer.deserializeArray(payload)
    }

    findOne(id) {}

    add(item) {}

    remove(item) {}
}