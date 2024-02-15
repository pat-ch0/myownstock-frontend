import { Config } from "../src/js/config/config"

describe(`Config`, () => {
    IDBTransaction(`Should return a Map`, () => {
        const config = Config.PRODUCTS
        expect(config).toBeInstanceOf(Map)
    })
})