import { ProductDeserializer } from "./product-deserializer.js"

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
    async findAll() {
        //const dataAsString = localStorage.getItem(this.#productKey)
        /* const dataAsString = fetch('http://localhost:8080/products')
        if (dataAsString === null) {
            return []
        }
        return ProductDeserializer.deserializeArray(JSON.parse(dataAsString)) */

        try {
            const response = await fetch('http://localhost:8080/products');
            
            if (!response.ok) {
                throw new Error(`Erreur lors de la récupération des produits: ${response.status}`);
            }
            
            const data = await response.json();
            
            return ProductDeserializer.deserializeArray(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des produits:', error);
            return [];
        }
    }

    findOne(id) {}

    add(item) {}

    remove(item) {}
}