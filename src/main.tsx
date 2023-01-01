import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import History from './pages/History'
import Home from './pages/Home'
import Orcamento from './pages/Orcamento'
import Projetos from './pages/Projetos'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="historia" element={<History />} />
          <Route path="orcamento" element={<Orcamento />} />
          <Route path="projetos" element={<Projetos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
