import { useEffect, useState } from "react"

const UseDebounce = <T>(value:T, delay?: number):T => {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay || 500)

    return () => {
      clearTimeout(timer)
    }
  },[value, delay])

  return debounceValue
}

export default UseDebounce