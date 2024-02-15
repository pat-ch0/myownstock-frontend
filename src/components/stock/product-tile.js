import { Product } from "../../js/product-list/product.js"

export class ProductTile {
    /**
     * Product to render
     * @var Product
     */
    product = null

    #template = `
    <div class="product-tile">
        <div class="product-thumbnail">
            <figure>
                <img src="{{ productThumbnail }}">
            </figure>
        </div>
        <div class="product-detail">
            <div class="product-title">
                {{ productTitle }}
            </div>
            <div class="product-stock">
                <span class="stock-label">Stock : </span>
                <span class="product-stock">{{ productStock }}
            </div>
        </div>
    </div>
    `
    setParameter(paramName, value) {
        this[paramName] = value
        
        return this
    }

    render() {
        if (this.product) {
            const thumbnail = this.#getThumbnail()

            this.#template = this.#template.replace(`{{ productThumbnail }}`, thumbnail)
            this.#template = this.#template.replace(`{{ productTitle }}`, this.product.label)
            this.#template = this.#template.replace(`{{ productStock }}`, this.product.stock)

            return this.#template
        }

        throw new Error(`Cannot render without a Product instance. Try to use setParameter('product', value) before rendering`)
    }

    #getThumbnail() {
        if (this.product.hasOwnProperty('thumbnail')) {
            return `/assets/images/product/${this.product.thumbnail}`
        }

        return 'assets/images/product/no-image.png'
    }
}