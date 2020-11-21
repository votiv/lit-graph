import { html } from 'lit-html'
import { until } from 'lit-html/directives/until'
import concat from 'lodash/concat'

import { Header } from './header/Header'
import { getGames } from '../graphql/queries/game'

const text1 = `This is the app body that is going to be `
const text2 = `FABULOUS!!!`

type Game = {
  id: string,
  name: string,
  year: number
}

const handleGameClick = (id: string, event: MouseEvent) => {
  console.log('button was clicked', id, event)
}

export const App = html`
  <div>${Header}</div>
  <div>${concat(text1, text2)}</div>
  <div>here we show the games: <div>${until(getGames()
    .then(res => res.data.games
      .map((g: Game) => html`<button @click=${(event: MouseEvent) => handleGameClick(g.id, event)}>${g.name} was released in ${g.year}</button>`))
  , html`local loader that is actually longer then a simple, standard spinner, but hell... yolo, right?`)}<div/></div>
  
`
