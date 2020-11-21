import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:3033/'
})

export const apollo = new ApolloClient({
  cache,
  link
})
