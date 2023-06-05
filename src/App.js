import './App.css'
// import Mockman from 'mockman-js'
import { Routes, Route } from 'react-router-dom'
import { Footer, Forms, Navbar, RequireAuth } from './components'
import { Cart, Checkout, Home, ProductPage, WishList } from './pages'
import { Toaster } from 'react-hot-toast'
import Profile from './pages/Profile/Profile'
import Lottie from 'lottie-react'
import preloader from './assets/preloader.json'
import { useContext } from 'react'
import { DataContext } from './context/DataProvider'
function App() {
  const { loader } = useContext(DataContext)
  return (
    <>
      {loader ? (
        <Lottie animationData={preloader} />
      ) : (
        <>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/auth" element={<Forms />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            {/* <Forms /> */}
            <Toaster
              toastOptions={{
                style: {
                  fontSize: '1.5rem',
                  fontWeight: '900',
                },
              }}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
