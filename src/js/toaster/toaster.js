export class Toaster {
    #document = document.querySelector('body')

    constructor() {
        this.#buildLayout()
    }

    dismiss(duration = 0) {
        let clicked = false
        document.querySelector('.toaster-success-text').addEventListener('click', () => {
            this.clicked()
            clicked = true
        })
        
        setTimeout(
            () => {
                if (!clicked) {document.querySelector('.toaster-outer-box').remove()}
            },
            duration * 1000)
    }

    clicked() {
        document.querySelector('.toaster-outer-box').remove()
        const onClickAction = document.createElement('p')
        onClickAction.innerHTML = '<p>Function launched</p>'
        this.#document.appendChild(onClickAction)
    }

    #buildLayout() {
        const styleSheet = document.createElement('link')
        styleSheet.setAttribute('href', '/src/js/toaster/toaster.css')
        styleSheet.setAttribute('rel', 'stylesheet')
        document.querySelector('head').appendChild(styleSheet)

        const toasterOuterBox = document.createElement('div')
        toasterOuterBox.classList.add('toaster-outer-box')

        const toasterInnerBox = document.createElement('div')
        toasterInnerBox.classList.add('toaster-inner-box')
        
        const toasterText = document.createElement('p')
        toasterText.classList.add('toaster-success-text')
        toasterText.innerHTML = '<p>Toasted</p>'


        toasterInnerBox.appendChild(toasterText)
        toasterOuterBox.appendChild(toasterInnerBox)

        this.#document.appendChild(toasterOuterBox)
    }
}