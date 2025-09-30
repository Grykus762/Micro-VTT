import './App.css'
import Foundry_sidebar from "./components/Foundry_sidebar";
import Memento_char_sheet from "./components/Memento_char_sheet";
import SystemLoader from './components/SystemLoader';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import {BrowserRouter, Routes, Route } from 'react-router';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<SystemLoader />} />
      
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
      {/* Replace Memento Mori Character Sheet with System Selector Page */}
    </BrowserRouter>
    </>
  )
}

export default App
