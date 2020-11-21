import { gql } from 'apollo-server'

export const schema = gql`
  type Query {
    """ Return a list of all getGames """
    games: [Game]!
    """ Return getGame by id if found or null otherwise """
    game(id: ID!): Game
  }
  
  type Game {
    id: ID!
    genre: Genre!
    name: String!
    year: Int!
  }
  
  enum Genre {
    RPG
    RTS
    TBS
    MOBA
    GSW
  }
`
