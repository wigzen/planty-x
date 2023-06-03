import './App.css'
// import Mockman from 'mockman-js'
import { Routes, Route } from 'react-router-dom'
import { Footer, Forms, Navbar, RequireAuth } from './components'
import { Cart, Checkout, Home, ProductPage, WishList } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route
          exact
          path={'/products/:productID'}
          element={<ProductDetails />}
        /> */}

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route path="/auth" element={<Forms />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/mock" element={<Mockman />} /> */}
      </Routes>
      {/* <Forms /> */}
      <Footer />
    </div>
  )
}

export default App
