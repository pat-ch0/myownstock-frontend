export class Product {
    #id = ''
    #label = ''
    #stock = 0

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id
    }

    get label() {
        return this.#label
    }

    set label(label) {
        this.#label = label
    }

    get stock() {
        return this.#stock
    }

    set stock(stock) {
        this.#stock = stock
    }

}