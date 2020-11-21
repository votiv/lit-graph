import { ASTNode } from 'graphql'

export const gqlFetch = (query: ASTNode | string) =>
  fetch('http://localhost:3033/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(query)
  })
    .then(r => r.json())

