import React from 'react'
import { hot } from 'react-hot-loader'

function Header(): JSX.Element {
  return <header className="text-3xl">Header</header>
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
