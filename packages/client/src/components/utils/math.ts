// this is added to the bundle
export const cube = (x: number, y: number, z: number) => x * y * z

// because of es6 module syntax (import, export) and the sideEffects property in package.json
// these two won't be added to the bundle when not used
export const square = (x: number, y: number) => x * y
export const add = (x: number, y: number) => x + y
