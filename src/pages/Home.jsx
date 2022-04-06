import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Header from '../components/Header'
import Chat from '../components/Chat'

export default function Home() {
  const { isAuth } = useAuth()
  const shouldRedirect = isAuth

  const navigate = useNavigate()

  React.useEffect(() => {
    if (!shouldRedirect) {
      navigate('/login')
    }
  })

  return (
    <>
      <Header />
      <Chat />
    </>
  )
}
