import React, { FunctionComponent } from 'react'
import { hot } from 'react-hot-loader'

const Header: FunctionComponent = function () {
  return (
    <header className="w-full mb-10 border-b-2">
      <div className="flex flex-wrap content-center h-12 pl-2 mx-auto max-w-screen-lg">
        <div className="font-semibold">Star Wars Simming Forum</div>
      </div>
    </header>
  )
}

interface MainProps {
  children?: React.ReactNode
}

const Main: FunctionComponent<MainProps> = function (props: MainProps) {
  return <main className="p-2 mx-auto max-w-screen-lg">{props.children}</main>
}

interface CategoryProps {
  categoryName: string
  children?: React.ReactNode
}

const Category: FunctionComponent<CategoryProps> = function (
  props: CategoryProps
) {
  return (
    <div className="flex flex-col flex-wrap">
      <h3 className="pb-2 font-bold">{props.categoryName} Message Boards</h3>
      {props.children}
    </div>
  )
}

interface BoardProps {
  boardName: string
  boardUri: string
  children?: React.ReactNode
}

const Board: FunctionComponent<BoardProps> = function ({
  boardName,
  boardUri,
}: BoardProps) {
  return (
    <div className="flex flex-row justify-between p-2 shadow rounded-md">
      <div className="w-3/4">
        <a
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          href={boardUri}
        >
          {boardName}
        </a>
      </div>
      <div className="w-1/4 text-xs">
        <strong>Last post by</strong> SomeUser in <a href="#">Some Topic...</a>
      </div>
    </div>
  )
}

const App: FunctionComponent = function () {
  return (
    <>
      <Header />
      <Main>
        <Category categoryName="Legacy of Endor">
          <Board boardName="Rebel Alliance" boardUri="#" />
        </Category>
      </Main>
    </>
  )
}

declare const module: any
export default hot(module)(App)
