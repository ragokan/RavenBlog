import React from "react"
import EmptyFooter from "./components/layout/EmptyFooter"
import Routes from "./components/routing/Routes"
import ContextProvider from "./ContextProvider"

const App = () => {
  return (
    <>
      <ContextProvider>
        <Routes />
        <EmptyFooter />
      </ContextProvider>
    </>
  )
}

export default App
