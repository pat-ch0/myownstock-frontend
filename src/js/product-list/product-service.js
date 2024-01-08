import { ProductDeserializer } from "./product-deserializer.js"

export class ProductService {
    /**
     * Name of the localStorage key
     * @var string
     */
    #productKey = 'products'
    
    /**
     * Returns all products for the defined key
     * @returns array
     */
    async findAll() {
        const response = await fetch(`http://localhost:8080/${this.#productKey}`);
        const data = await response.json();
            
        return ProductDeserializer.deserializeArray(data); // json to product object
    }

    findOne(id) {}

    add(item) {}

    remove(item) {}
}