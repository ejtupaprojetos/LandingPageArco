import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
// Este layout é o "molde" comum a todas as páginas: Header no topo,
// Footer embaixo, e o conteúdo de cada página renderizado no meio
// através do <Outlet /> (fornecido pelo react-router-dom).
function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
