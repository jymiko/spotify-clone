"use client"

import { MyUserContextProvider } from "@/hooks/UseUser"
import { FC, ReactNode } from "react"

interface UserProviderProps {
  children: ReactNode
}

const UserProvider:FC<UserProviderProps> = ({children}) => {
  return(
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  )
}

export default UserProvider