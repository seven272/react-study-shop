import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './components/Shop'
import './App.css'
import { ContextProvider } from './context'

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>

      <Footer />
    </div>
  )
}

export default App
