import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Servicos from './pages/Servicos.jsx'
import Formacoes from './pages/Formacoes.jsx'
import Galeria from './pages/Galeria.jsx'
import Projectos from './pages/Projectos.jsx'
import ProjectoDetail from './pages/ProjectoDetail.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contactos from './pages/Contactos.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/o-que-fazemos" element={<Servicos />} />
        <Route path="/formacoes" element={<Formacoes />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/projectos" element={<Projectos />} />
        <Route path="/projectos/:slug" element={<ProjectoDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
