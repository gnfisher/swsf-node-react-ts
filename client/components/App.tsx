import React from 'react'
import { hot } from 'react-hot-loader'

function Header(): JSX.Element {
  return <header>Header</header>
}

function App(): JSX.Element {
  return (
    <>
      <Header />
    </>
  )
}

declare const module: any
export default hot(module)(App)
