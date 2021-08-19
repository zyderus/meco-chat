import styles from '../styles/ChatBox.module.css'
import { useState, useRef, useEffect, SyntheticEvent } from 'react'
import io from 'socket.io-client'
import Image from 'next/image'
import Messages from './Messages'

let socket = io(`http://192.168.20.179:5500`)

const Chat = ({ user }: any) => {
  const [feedback, setFeedback] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<any>([])
  const input = useRef<any>()
  const messagesEndRef = useRef<any>()

  const userName = user.email.substring(0, user.email.indexOf('@'))

  const handleSend = (e: any) => {
    if (!message.trim()) {
      setMessage('')
      return
    } else {
      socket.emit('chat', {
        message,
        user: userName,
      })
      setMessage('')
      return
    }
  }

  const handleOnChange = (e: any) => {
    socket.emit('typing', userName)
    setMessage(e.target.value)
  }

  useState(() => {
    socket.on('chat', (data: any) => {
      setFeedback('')
      setMessages((messages: any) => [...messages, data])
    })

    socket.on('typing', (data: any) => {
      setFeedback(`${data} is typing...`)
    })

    // CLEAN UP THE EFFECT
    return () => socket.disconnect()
    // @ts-ignore
  }, [])

  useEffect(() => input.current.focus(), [])
  useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, feedback])

  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <Image className={styles.mainAvatar} src={user.image} height={80} width={80} alt='avatar' />
      </div>
      <div className={styles.chat_container}>
        <div className={styles.chat_window}>
          <Messages messages={messages} name={userName} />
          <div className={styles.feedback}>{feedback}</div>
          <div className={styles.messageSpacer}></div>
          <div ref={messagesEndRef} />
        </div>
        <input
          ref={input}
          className={styles.message}
          onChange={handleOnChange}
          onKeyPress={e => (e.key === 'Enter' ? handleSend(e) : null)}
          value={message}
          type='text'
          placeholder='Message'
        />
        <button className={styles.send} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat
