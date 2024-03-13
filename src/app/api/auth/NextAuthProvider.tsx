'use client'

import { SessionProvider } from 'next-auth/react'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider
