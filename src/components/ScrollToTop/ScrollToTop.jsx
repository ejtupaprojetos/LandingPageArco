import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// volta a página para o topo qnd mudar de rota
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default ScrollToTop