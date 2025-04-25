import { useState } from 'react'
import Memento_char_sheet from './components/Memento_char_sheet'
import Foundry_sidebar from './components/Foundry_sidebar'
import './App.css'

function App() {
  return (
    <div id="main-container">
     <Memento_char_sheet />
     <Foundry_sidebar />
    </div>
  )
}

export default App
