import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetails from './components/ProductDetails'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'
import OrdersPage from './pages/OrdersPage'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'

function App() {
  const location = useLocation()
  const hideChrome =
    location.pathname.startsWith('/pages/signup') ||
    location.pathname.startsWith('/pages/login') ||
    location.pathname.startsWith('/admin')
  return (
    <div className="min-h-screen bg-white">
      {!hideChrome && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/categories" element={<CategoriesPage />} />
        <Route path="/product-demo" element={<ProductDetails />} />
        <Route path="/pages/orders" element={<OrdersPage />} />
        <Route path="/pages/cart" element={<CartPage />} />
        <Route path="/pages/checkout" element={<CheckoutPage />} />
        <Route path="/pages/signup" element={<SignupPage />} />
        <Route path="/pages/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  )
}

export default App
