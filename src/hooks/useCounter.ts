import { useEffect, useState } from 'react'

export const useCounter = (maximum: number): number => {
  const [returnCount, setReturnCount] = useState(0)
  const duration = 2000
  const frame = 1000 / 120
  const proportion = Math.floor(duration / frame)
  useEffect(() => {
    let count = 0
    const counter = setInterval(() => {
      const progress = count++ / proportion
      setReturnCount(Math.floor(maximum * progress))
      if (count > proportion) {
        clearInterval(counter)
      }
    }, frame)
  }, [frame, maximum, proportion])
  return returnCount
}
