/**
 * @jest-environment jsdom
 */

import { Product } from "../src/js/product-list/product"
import { ProductService } from "../src/js/product-list/product-service"
import { Main } from './../src/main'

/**
 * Mock localStorage for testing purpose without browser
 */
import { LocalStorage } from 'node-localstorage'
global.localStorage = new LocalStorage('./mock-data')

describe ('Product service', () => {
    let main

    beforeEach(() => {
        main = new Main()
    })

    it('Should return 3 products', () => {
        const productService = new ProductService()
        const products = productService.findAll()
        expect(products.length).toEqual(3)
    })

    it(`Should contains a Product instance`, () => {
        const productService = new ProductService()
        const products = productService.findAll()
        expect(products[0]).toBeInstanceOf(Product)        
    })
})