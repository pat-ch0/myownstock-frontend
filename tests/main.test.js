/**
 * @jest-environment jsdom
 */

import { Router } from '../src/js/router/router.js'
import { Main } from './../src/main.js'

describe(`Main class`, () => {
    let main

    beforeEach(() => {
        main = new Main()
    })

    it (`Should create a router instance`, () => {
        expect(main.router).toBeInstanceOf(Router)
    })
})
