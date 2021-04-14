import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const isServer = typeof window === 'undefined'

  const [windowSize, setWindowSize] = useState({
    width: isServer ? 1920 : window.innerWidth,
    height: isServer ? 1080 : window.innerHeight,
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      })
    }
  }, [])

  return windowSize
}
