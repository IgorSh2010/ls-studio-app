import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/HeaderNew'
import Home from './Pages/Home'
import Products from './Pages/ProductsMain'
import AboutUs from './Pages/About'
import ProductDetails from './Pages/ProductDetails'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Account from './Pages/Account'
import Regulamin from './Pages/RegulaminPolityki'
import Favorites from './Pages/Favorites'
import ConservationsMain from './Pages/ConservationsMain'
import CartPage from './Pages/CartPage'
import CookieConsent from './components/ui/CookieConsent'
import Orders from './components/Orders'
import ConservationsDetails from './components/ConservationsDetails'
import ProtectedChat from './components/ProtectedChat'
import { CartProvider } from './context/CartContext'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header>
        <Header />
      </header>

      {/*NEWS SECTION*/}
      {/*<div className="bg-red-500 text-white p-4">
        ТУТ МОЖЕ БУТИ ЯКАСЬ ЦІКАВА ІНФОРМАЦІЯ ЧИ, МОЖЛИВО, ЕКСТРЕНІ ПОВІДОМЛЕННЯ!
      </div>*/}

      {/*CONTENT SECTION*/}
      <div className="flex flex-1">
        {/* Routing */}
        <main
          className="md:p-4 flex-1 bg-cover bg-center bg-no-repeat bg-fixed w-full"
          style={{ backgroundImage: "url('/vyazanie-kryuchkom-8.jpg')" }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/regulamin" element={<Regulamin />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/productsMain" element={<Products />} />
            <Route path="/productsMain/:id" element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />

            {/*          
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/conservations" element={<ConservationsMain />} />
          <Route path="/chat/:orderId" element={<ProtectedChat><ConservationsDetails /></ProtectedChat>} /> 
          */}
          </Routes>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    // <CartProvider>
    <Router>
      <Layout />
      <CookieConsent />

      {/* FOOTER (опціонально) */}
      <footer className="flex flex-col bg-fujiBase text-center text-sm text-gray-400">
        <div className="flex gap-2 justify-center border-b border-border py-2">
          <a
            href="https://www.facebook.com/larysa.shepetko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/2023_Facebook_icon.svg.png"
              alt="Facebook"
              title="Polub nas na Facebook"
              className="w-7 h-7"
            />
          </a>
          <a
            href="https://www.instagram.com/shepetko.larisa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Instagram.png"
              alt="Instagram"
              title="Śledź nas na Instagram"
              className="w-7 h-7"
            />
          </a>
          <a
            href="https://wa.me/48501577919"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp logo.png"
              alt="WhatsApp"
              title="Napisz na WhatsApp"
              className="w-7 h-7"
            />
          </a>
        </div>
        <div className="justify-center py-2">
          &copy; {new Date().getFullYear()} LS STUDIO. Wszelkie prawa
          zastrzeżone.
        </div>
      </footer>
    </Router>
    //</CartProvider>
  )
}

export default App
