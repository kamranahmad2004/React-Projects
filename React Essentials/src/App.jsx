import React from "react"
import Header from "./Components/Header"
import CoreConcepts from "./Components/CoreConcepts"
import Tab from "./Components/Tab"

function App() {
  console.log("Rendering App ")
  return (
    <div>
      <Header />
      <CoreConcepts />
      <Tab />
    </div>
  )
}

export default App
