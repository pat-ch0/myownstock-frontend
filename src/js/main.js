import { ProductFixture } from "./product-list/product_fixture.js";

let main;

class Main {
    constructor() {
    }

    loadFixture() {
        const loadFixture = new ProductFixture()
    }
}

(() => {
    main = new Main()

})()