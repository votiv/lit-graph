import { html } from 'lit-html'

export const errorHandler = (errorMessage: string) =>
  html`An error occurred: ${errorMessage}. Please reload page!`
