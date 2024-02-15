export class AddComponent {
    #title = 'Add a product'
    #app = null
    #id = null
    #label = null
    #stock = null
    #service = null

    #template =
        `<form action="" method="post">
            <ul>
                <li>
                    <label for="id">Id&nbsp;:</label>
                    <input type="text" id="id" name="prod_id">
                </li>
                <li>
                    <label for="label">Label&nbsp;:</label>
                    <input type="text" id="label" name="prod_label">
                </li>
                <li>
                    <label for="stock">Stock&nbsp;:</label>
                    <input type="int" id="stock" name="prod_stock">
                </li>
            </ul>
            <button id="addButton" disabled>Add</button>
        </form>`

    constructor() {
        this.#app = document.querySelector('[app]')
        this.#service = new ProductService()
    }

    load() {
        const title = document.querySelector('h1')
        title.innerHTML = this.#title
        this.#app.innerHTML = this.#template
        document.getElementById('stock').value = 0
        document.addEventListener('DOMContentLoaded', () => {
            const productIdInput = document.getElementById('id');
            const productLabelInput = document.getElementById('label');
            const productStockInput = document.getElementById('stock');
            const addButton = document.getElementById('addButton');
          
            productIdInput.addEventListener('change', this.checkForm());
            productLabelInput.addEventListener('change', this.checkForm());
            productStockInput.addEventListener('change', this.checkForm());
          
            if (this.checkForm()) {
                this.#id = productIdInput.value
                this.#label = productLabelInput.value
                this.#stock = productStockInput.value
            }

            addButton.addEventListener('click', addProduct());
          });
    }

    checkForm() {
        const idCheck = document.getElementById('id').value
        const labelCheck = document.getElementById('label').value
        const stockCheck = document.getElementById('stock').value
        stockCheck = parseInt(stockCheck)

        document.getElementById('addButton').disabled = !(idCheck && labelCheck && stockCheck >= 0)
    }

    addProduct() {
        
    }
}