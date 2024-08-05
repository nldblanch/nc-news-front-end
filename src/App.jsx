import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Article } from './pages/Article'

function App() {
  

  return (
    <>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<Article />} />
     </Routes>
    </>
  )
}

export default App
