import { useEffect, useState } from 'react'

export const useAnimateBox = (): { opacity: boolean; moveBool: boolean } => {
  const [opacity, setOpacity] = useState(false)
  const [moveBool, setMoveBool] = useState(false)
  useEffect(() => {
    setOpacity(true)
    setMoveBool(true)
  }, [])
  return { opacity, moveBool }
}
