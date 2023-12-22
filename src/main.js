/**
 * Main
 *  Entry point of our app
 *  Load Router
 * @version 1.0.0
 *  - Instanciate a router
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 * @see Router
 */

import { Router } from "./js/router/router.js"

/**
 * Class instance of Main
 */
let main

class Main {
    #router = null

    constructor() {
        this.#run()
    }

    #run() {
        this.#router = new Router()
    }
}

(() => {
    main = new Main()
})()