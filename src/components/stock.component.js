export class StockComponent {
    #title = 'My Stock'
    #template = `<p>Stock works!</p>`

    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        const app = document.querySelector('[app]')
        app.innerHTML = this.#template
    }
}