import { useEffect, useState } from 'react'

import { easeOutExpo } from 'utils/easeOutExpo'

export const useCounter = (maximum: number): number => {
  const [returnCount, setReturnCount] = useState(0)
  const duration = 2000
  const viewSpeed = 1000 / 120
  const frame = Math.floor(duration / viewSpeed)
  useEffect(() => {
    let count = 0
    const counter = setInterval(() => {
      const progress = easeOutExpo(count++ / frame)
      setReturnCount(Math.floor(maximum * progress))
      if (count > frame) {
        clearInterval(counter)
      }
      return () => {
        clearInterval(counter)
      }
    }, frame)
  }, [maximum, viewSpeed, frame])
  return returnCount
}
