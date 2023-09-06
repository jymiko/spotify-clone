"use client"

import UseDebounce from "@/hooks/UseDebounce"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import qs from 'query-string'
import Input from "./Input"

const SearchInput = () => {
  const router = useRouter()
  const [value, setValue] = useState<string>('')
  const debounce = UseDebounce<string>(value, 500)

  useEffect(() => {
    const query = {
      title: debounce
    }

    const url = qs.stringifyUrl({
      url: '/search',
      query: query
    })

    router.push(url)
  },[debounce, router])


  return(
    <Input placeholder="What do you want to listen to ?" value={value} onChange={(e) => setValue(e.target.value)}/>
  )
}

export default SearchInput