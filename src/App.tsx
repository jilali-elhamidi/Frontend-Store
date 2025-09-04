import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import ProductDetails from './pages/Produit/ProductDetails'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/Produit/CategoriesPage'
import OrdersPage from './pages/Produit/OrdersPage'
import CheckoutPage from './pages/Produit/CheckoutPage'
import CartPage from './pages/CartPage/CartPage'
import SignupPage from './pages/AuthPages/SignupPage'
import LoginPage from './pages/AuthPages/LoginPage'
import AdminDashboardPage from './pages/AdminPages/AdminDashboardPage'
import AdminOrdersPage from './pages/AdminPages/AdminOrdersPage'
import AdminOrderDetailsPage from './pages/AdminPages/AdminOrderDetailsPage'
import AdminProductsPage from './pages/AdminPages/AdminProductsPage'
import AdminProductDetailsPage from './pages/AdminPages/AdminProductDetailsPage'
import AdminProductCreatePage from './pages/AdminPages/AdminProductCreatePage'
import AdminBlogListPage from './pages/AdminPages/AdminBlogListPage'
import AdminBlogDetailsPage from './pages/AdminPages/AdminBlogDetailsPage'
import AdminBlogCreatePage from './pages/AdminPages/AdminBlogCreatePage'
import AdminChatPage from './pages/AdminPages/AdminChatPage'
import AdminShippingPage from './pages/AdminPages/AdminShippingPage'

function App() {
  const location = useLocation()
  const hideChrome =
    location.pathname.startsWith('/pages/signup') ||
    location.pathname.startsWith('/pages/login') ||
    location.pathname.startsWith('/admin')

  // Ensure the 'dark' class is applied globally based on saved preference or system setting
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const preferDark = saved ? saved === 'dark' : systemPrefersDark
    document.documentElement.classList.toggle('dark', !!preferDark)

    const mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }
    mql?.addEventListener?.('change', onChange)
    return () => mql?.removeEventListener?.('change', onChange)
  }, [])
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
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
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/products/new" element={<AdminProductCreatePage />} />
        <Route path="/admin/products/:id" element={<AdminProductDetailsPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage />} />
        <Route path="/admin/blog" element={<AdminBlogListPage />} />
        <Route path="/admin/blog/details" element={<AdminBlogDetailsPage />} />
        <Route path="/admin/blog/create" element={<AdminBlogCreatePage />} />
        <Route path="/admin/chat" element={<AdminChatPage />} />
        <Route path="/admin/shipping" element={<AdminShippingPage />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  )
}

export default App

