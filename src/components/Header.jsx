import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { getAuth, signOut } from 'firebase/auth'
import { removeUser } from '../store/slices/userSlice'
import { useAuth } from '../hooks/useAuth'

export default function Header() {
  const dispatch = useDispatch()
  const {email} = useAuth()

  const sigmOuthandler = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography
        color='inherit'
        align='center'
        noWrap
        sx={{ width: '200px'}}
      >
        {email}
      </Typography>
      <Typography
        component='h2'
        variant='h5'
        color='inherit'
        align='center'
        noWrap
        sx={{ width: '70%' }}
      >
        Chat by Pipok
      </Typography>
      <Button style={{margin: '0px auto'}} onClick={() => sigmOuthandler()} variant='outlined' size='small'>
        Выйти
      </Button>
    </Toolbar>
  )
}
