import './App.css'
import Foundry_sidebar from "./components/Foundry_sidebar";
import Memento_char_sheet from "./components/Memento_char_sheet";

function App() {
  return (
    <div id='main-container'>
      <Memento_char_sheet />
      <Foundry_sidebar />
    </div>
  )
}

export default App
