"use client"

import { Database } from '@/types_db'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { ReactNode, FC, useState } from 'react'

interface SupabaseProviderProps {
  children: ReactNode
}

const SupabaseProvider:FC<SupabaseProviderProps> = async({ children }) => {
  const [supabaseClient] = useState(() => createClientComponentClient<Database>())

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider