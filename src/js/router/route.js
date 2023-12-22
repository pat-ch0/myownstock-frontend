/**
 * Route
 * @version 1.0.0
 *  - get set route parts : path and component to load
 * @date 2023-12-22
 * @author Jean-Luc Aubert <jean-luc.aubert@aelion.fr>
 */
export class Route {
    /**
     * path to match to
     * @var string
     */
    #path = ''

    /**
     * Component to load
     * @var Component
     */
    #component = null

    #title = ''

    set path(path) {
        this.#path = path
    }

    get path() {
        return this.#path
    }

    set component(component) {
        this.#component = component
    }

    get component() {
        return this.#component
    }

    set title(title) {
        this.#title = title
    }

    get title() {
        return this.#title
    }
}