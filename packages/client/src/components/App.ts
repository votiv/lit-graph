import { html } from 'lit-html'
import { until } from 'lit-html/directives/until'

import { Header } from './header/Header'
import { getGames } from '../graphql/queries/game'

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
  <div>here we show the games:
    <div>
      ${until(getGames()
        .then(res => res.data.games.map(
          (g: Game) => html`
            <button onclick=${(event: MouseEvent) => handleGameClick(g.id, event)}>
              ${g.name} was released in ${g.year}
            </button>`)
        ), html`spinner`)
      }
    <div/>
  </div>
  
`
