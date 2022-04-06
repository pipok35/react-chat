import React, { useState } from 'react'
import { serverTimestamp, orderBy, query } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../database/firebase'
import MessageItem from '../components/MessageItem'

export default function Chat() {
  const auth = getAuth()
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')

  const q = query(collection(db, 'messages'), orderBy('createdAt'))

  const [messages] = useCollectionData(q)

  const sendMessage = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: serverTimestamp(),
      })
      console.log(user)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setValue('')
  }

  return (
    <Container>
      <Grid container justify={'center'} style={{ marginTop: 20 }}>
        <div
          style={{
            width: '67%',
            height: '65vh',
            border: '1px solid gray',
            overflowY: 'auto',
            margin: '0 auto',
          }}
        >
          {messages?.map((message) => (
            <MessageItem message={message} />
          ))}
        </div>
        <Grid
          container
          alignItems={'flex-end'}
          style={{ width: '67%', margin: '0px auto' }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant={'outlined'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ margin: '10px 0px' }}
          />
          <Button onClick={sendMessage} variant={'outlined'}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
