import { ProductDeserializer } from "./product-deserializer"

export class ProductService {
    /**
     * Name of the localStorage key
     * @var string
     */
    #productKey = 'product'
    
    /**
     * Returns all products for the defined key
     * @returns array
     */
    findAll() {
        const dataAsString = localStorage.getItem(this.#productKey)
        if (dataAsString === null) {
            return []
        }
        return ProductDeserializer.deserializeArray(JSON.parse(dataAsString))
    }

    findOne(id) {}

    add(item) {}

    remove(item) {}
}