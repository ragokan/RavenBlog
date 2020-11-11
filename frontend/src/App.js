import React from "react"
import Routes from "./components/routing/Routes"
import ContextProvider from "./ContextProvider"

const App = () => {
  return (
    <>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </>
  )
}

export default App
