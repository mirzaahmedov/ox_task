import { useState, useEffect, useRef } from "react"

export const useDebounceValue = <T>(value: T, delay: number) => {
  const timeout = useRef<number | null>()

  const [deferredValue, setDeferredValue] = useState<T>(value)
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    timeout.current = setTimeout(() => {
      setDeferredValue(value)
    }, delay)

    return () => { 
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [value, delay])
  return deferredValue
}
