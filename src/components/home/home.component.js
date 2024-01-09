import { Toaster } from "../../js/toaster/toaster.js"

export class HomeComponent {
    #title = 'Home - My Home Stock'
    #template = `<p>Home works!</p>`

    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        const app = document.querySelector('[app]')
        app.innerHTML = this.#template

        this.#onInit()
    }

    #onInit() {
        const toaster = new Toaster()
        toaster.dismiss(4)
    }
}