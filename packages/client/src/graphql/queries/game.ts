import gql from 'graphql-tag'

import { apollo } from '../../components/apolloClient'

export const getGames = () => apollo.query({
  query: gql`
    query gamesQuery {
      games {
        id
        name
        year
      }
    }
  `
})

export const getGameById = (id: string) => apollo.query({
  query: gql`
    query gameQuery($id: ID!) {
      game(id: $id) {
        id
        name
        year
      }
    }
  `
})
