import { ProductService } from './../js/product-list/product-service'
import { ProductDeserializer } from '../js/product-list/product-deserializer'
import { ProductTile } from './product-tile'
/**
 * StockComponent
 * @version 1.0.0
 *  - Load product stock
 *  - Sort stock by alpha order
 *  - Display stock as simple tile list
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 */
export class StockComponent {
    /**
     * Component title
     * @var string
     */
    #title = 'My Stock'

    /**
     * Template to use to render
     * @var string
     */
    #template = ''

    /**
     * Product service
     * @var ProductService
     */
    #service = null

    /**
     * Products to display alphabetical sorted
     * @var Array<Product>
     */
    #products = []

    constructor() {
        this.#service = new ProductService()
        this.#onInit()
    }


    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        const app = document.querySelector('[app]')
        app.innerHTML = this.#template
    }

    #onInit() {
        this.#products = ProductDeserializer.deserialize(this.#service.findAll())
            .sort((p1, p2) => p1.localeCompare(p2))
        for (const product of this.#products) {
            const tile = new ProductTile()
            tile.setParameter('product', product)
            this.#template += tile.render()
        }

    }
}