const games = [
  {
    id: '0',
    genre: 'RTS',
    name: 'Age of Empires II: Definite Edition',
    year: 2019
  },
  {
    id: '1',
    genre: 'MOBA',
    name: 'Dota 2',
    year: 2013
  }
]

export const resolvers = {
  Query: {
    games: () => games,
    game: (root: any, args: { id: string }) => games.find(g => g.id === args.id)
  }
}
