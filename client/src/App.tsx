import React from 'react'
import './App.css'

function App() {
  return <Header />
}

function Header() {
  return (
    <div className="w-full border-b-2 border-gray-100">
      <div className="p-3 mx-auto lg:max-w-screen-lg">
        <div className="font-semibold">Star Wars Sim Forum</div>
      </div>
    </div>
  )
}

export default App
