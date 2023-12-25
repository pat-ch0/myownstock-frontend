import { LocalStorage } from "../storage/local-storage.js"
import * as product from './data-fixture.json'

export class ProductFixture {
    #productKey = 'product'

    loadFixture() {
        const storage = new LocalStorage()
        try {
            const dataAsString = storage.getData(this.#productKey)
            if (JSON.parse(dataAsString).length !== 3) {
                // Need to reset datas
                localStorage.removeKey(this.#productKey)
                this.loadFixture()
            }
        } catch (error) {
            storage.setData(this.#productKey, product)
            return product
        }
    }
}