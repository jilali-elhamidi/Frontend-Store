import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import ProductDetails from './pages/Produit/ProductDetails'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/Produit/Categories'
import OrdersPage from './pages/Produit/Orders'
import CheckoutPage from './pages/Produit/Checkout'
import CartPage from './pages/CartPage/CartPage'
import SignupPage from './pages/AuthPages/Signup'
import LoginPage from './pages/AuthPages/Login'
import AdminDashboardPage from './pages/AdminPages/AdminDashboard'
import AdminOrdersPage from './pages/AdminPages/AdminOrders'
import AdminOrderDetailsPage from './pages/AdminPages/AdminOrderDetails'
import AdminProductsPage from './pages/AdminPages/AdminProducts'
import AdminProductDetailsPage from './pages/AdminPages/AdminProductDetails'
import AdminProductCreatePage from './pages/AdminPages/AdminProductCreate'
import AdminBlogListPage from './pages/AdminPages/AdminBlogList'
import AdminBlogDetailsPage from './pages/AdminPages/AdminBlogDetails'
import AdminBlogCreatePage from './pages/AdminPages/AdminBlogCreate'
import AdminChatPage from './pages/AdminPages/AdminChat'
import AdminShippingPage from './pages/AdminPages/AdminShipping'

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
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden">
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