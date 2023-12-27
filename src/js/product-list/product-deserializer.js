import { Product } from "./product"

export class ProductDeserializer {
    static deserialize(datas) {
        const products = []
        return datas.map((data) => {
            const product = new Product()
            product.id = data.id
            product.label = data.label
            product.stock = data.stock

            return product
        })
    }
}