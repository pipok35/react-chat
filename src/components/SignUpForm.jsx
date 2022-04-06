import React from 'react'
import { Form } from './Form'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../store/slices/userSlice'

const SignUpForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignUp = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return <Form title={'Зарегистрироваться'} handleClick={handleSignUp} />
}

export { SignUpForm }
