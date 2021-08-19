import styles from '../styles/ChatBox.module.css'
import { useState, useEffect, SyntheticEvent } from 'react'
import io from 'socket.io-client'
import Image from 'next/image'

let socket = io('http://localhost:5500')

const Chat = ({ user }: any) => {
  const [output, setOutput] = useState('')
  const [feedback, setFeedback] = useState('')
  const [message, setMessage] = useState('')

  const userName = user.email.substring(0, user.email.indexOf('@'))

  const handleSend = () => {
    socket.emit('chat', {
      message,
      handle: userName,
    })
    setMessage('')
    console.log('click')
  }

  const handleOnChange = (e: any) => {
    socket.emit('typing', userName)
    setMessage(e.target.value)
  }

  useState(() => {
    // Listen for events
    socket.on('chat', (data: any) => {
      setFeedback('')
      setOutput(output + '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>')
    })

    socket.on('typing', (data: any) => {
      setFeedback(`${data} is typing...`)
    })

    // CLEAN UP THE EFFECT
    return () => socket.disconnect()
    // @ts-ignore
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <Image className={styles.mainAvatar} src={user.image} height={80} width={80} alt='avatar' />
      </div>
      <div className={styles.chat_window}>
        <div className={styles.output}>{output}</div>
      </div>
      <div className={styles.feedback}>{feedback}</div>
      <input className={styles.message} onChange={handleOnChange} value={message} type='text' placeholder='Message' />
      <button className={styles.send} onClick={handleSend}>
        Send
      </button>
    </div>
  )
}

export default Chat
