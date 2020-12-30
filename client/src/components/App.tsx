import React, { FunctionComponent } from 'react'
import { hot } from 'react-hot-loader'

const App: FunctionComponent = function () {
  return <div>Hello, World!</div>
}

declare const module: any
export default hot(module)(App)
