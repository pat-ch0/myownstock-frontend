import { ProductService } from '../../js/product-list/product-service.js'
import { ProductTile } from './product-tile.js'
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
    }


    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        const app = document.querySelector('[app]')
        this.#onInit()
        app.innerHTML = this.#template
    }

    async #onInit() {
        this.#products = await this.#service.findAll()
        
        this.#products.sort((p1, p2) => p1.label.localeCompare(p2.label))
        
        this.#template = `<link rel="stylesheet" href="/src/components/stock/product-tile.css">`
        this.#template += `<div class="product-list" role="list">`
        
        for (const product of this.#products) {
            const tile = new ProductTile()
            tile.setParameter('product', product)
            this.#template += tile.render()
        }
        this.#template += '</div>'

    }
}