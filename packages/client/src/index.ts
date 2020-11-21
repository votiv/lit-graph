import { html, render } from 'lit-html'

import { App } from './components/App'

const app = () => html`${App}`

render(app(), document.body)
