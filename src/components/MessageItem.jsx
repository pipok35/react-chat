import React from 'react'
import Avatar from '@mui/material/Avatar'
import { useAuth } from '../hooks/useAuth'

export default function MessageItem({ message }) {
  const { id } = useAuth()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: 10,
        border: '1px solid black',
        borderRadius: '10px',
        marginLeft: id === message.uid ? 'auto' : '10px',
        width: '250px',
        padding: 5,
      }}
    >
      <Avatar />
      <div style={{ width: '80%', marginLeft: '10px', wordWrap: 'break-word' }}>
        {message.text}
      </div>
    </div>
  )
}
