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
        return dataAsString !== null ? JSON.parse(dataAsString) : []
    }

    findOne(id) {}

    add(item) {}

    remove(item) {}
}