import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/categories" element={<CategoriesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

