import { useState, useEffect } from 'react'

// Retorna a tue  assim que a página é rolada além do threshold pixels.
function useIsScrolled(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold)
    }

    handleScroll() // caso a página já carregue rolada
    window.addEventListener('scroll', handleScroll)

    // pra não vazar memória nem acumular listeners duplicados
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}

export default useIsScrolled
