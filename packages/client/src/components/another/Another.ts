import { html, render } from 'lit-html'
import { volume } from '../utils/math'

const another = (text: string | number) => html`<div>let's show another text here: ${text}</div>`

const bootstrap = document.querySelector('some-custom-tag')
bootstrap && render(another(volume(1, 4, 6)), bootstrap)
