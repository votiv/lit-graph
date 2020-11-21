import { ApolloServer } from 'apollo-server'

import { resolvers } from './resolvers'
import { schema } from './schema'

const server = new ApolloServer({
  resolvers,
  typeDefs: schema,
  playground: true,
  introspection: true,
})
server.listen(3033).then(({ url }) => console.log(`server ready at ${url}`))

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => console.log('module disposed. \n'))
}
