import { html, render } from 'lit-html'
import { cube } from '../utils/math'

const another = (text: string | number) => html`<div>let's show another text here: ${text}</div>`

const bootstrap = document.querySelector('some-custom-tag')
bootstrap && render(another(cube(1, 4, 6)), bootstrap)
