import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

reportWebVitals()
