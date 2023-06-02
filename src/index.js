import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import { makeServer } from './server'
import DataProvider from './context/DataProvider'
import CartProvider from './context/CartProvider'
import WishProvider from './context/WishProvider'
import AuthProvider from './context/AuthProvider'

// Call make Server
// makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <CartProvider>
            <WishProvider>
              <App />
            </WishProvider>
          </CartProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
