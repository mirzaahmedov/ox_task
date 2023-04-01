import { useState, useEffect } from "react"

export const useDeferedValue = <T>(value: T, delay: number) => {
  const [deferredValue, setDeferredValue] = useState<T>(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeferredValue(value)
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return deferredValue
}
