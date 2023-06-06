import { useEffect, useState } from 'react'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>()

  useEffect(() => {
    const getCurrentWidth = () => {
      const currentWidth = window.innerWidth
      if (currentWidth <= 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    const debounceResize = (fn: Function, delay: number) => {
      let id: any
      return (...args: any) => {
        if (id) clearTimeout(id)
        id = setTimeout(() => {
          fn(...args)
        }, delay)
      }
    }
    window.addEventListener('resize', debounceResize(getCurrentWidth, 500))
    getCurrentWidth()
    return () => window.removeEventListener('resize', getCurrentWidth)
  }, [])

  return { isMobile }
}
