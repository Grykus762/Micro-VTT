import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
     <div>
      <h2>Nav area (if necessary) here</h2>
     </div>

     <div id="main-container">
      <div id="main-window">
        <div class="two-col">
          <h2>Main Charsheet Window Here</h2>
          <h3>Character Name: Name</h3>
          <p>Your Name and an epithet that represents you</p>
          <h3>Gift of the Name: Gift Description</h3>
          <p>Which new identity will emerge after you sacrifice your name?</p>
          <p>Gift Progress boxes need to go here, with two variations, unfilled and filled</p>
          <p>Likely need a div here as a container for the organs</p>

          <h3>Nerve</h3>
          <p>Organ Slot images Here</p>
          <p>Organ Description here</p>

          <h3>Cerebrum</h3>
          <p>Organ Slot images Here</p>
          <p>Organ Description here</p>

          <h3>Heart</h3>
          <p>Organ Slot images Here</p>
          <p>Organ Description here</p>

          <h3>Viscera</h3>
          <p>Organ Slot images Here</p>
          <p>Organ Description here</p>
        </div>
      <div>
        <h2>Other shit here</h2>
      </div>
      </div>
      <div id="history-window">
        <h2>Sidebar here</h2>
        </div>
     </div>
    </>
  )
}

export default App
