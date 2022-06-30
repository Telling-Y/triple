import { useEffect, useState } from 'react'

export const useCounter = (maximum: number) => {
  const [returnCount, setReturnCount] = useState(0)
  useEffect(() => {
    for (let count = 0; count <= maximum; count++) {
      setTimeout(() => {
        setReturnCount(count)
      }, 1000)
    }
  }, [])
  return returnCount
}
