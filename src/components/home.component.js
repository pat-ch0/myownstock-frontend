export class HomeComponent {
    #title = 'Home - My Home Stock'
    #template = `<p>Home works!</p>`

    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        const app = document.querySelector('[app]')
        app.innerHTML = this.#template
    }
}