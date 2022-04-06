import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Form = ({title, handleClick}) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

  return (
    <>
      <TextField
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => handleClick(email, password)} type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        {title}
      </Button>
    </>
  )
}

export { Form }
