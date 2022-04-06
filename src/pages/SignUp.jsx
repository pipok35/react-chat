import * as React from 'react'
import { Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import LinkMUI from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SignUpForm } from '../components/SignUpForm'

const theme = createTheme()

const SignUp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Регистрация
          </Typography>
          <Box sx={{ mt: 1 }}>
            <SignUpForm />
            <Link to='/login'>
              <LinkMUI href='#' variant='body2'>
                Есть аккаунт? Войти
              </LinkMUI>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export {SignUp}