import styles from '../styles/Message.module.css'

// @ts-ignore
const Message = ({ message: { message, user, time }, name }) => {
  let isSentByCurrentUser = false
  const trimmedName = name.trim().toLowerCase()
  time = new Date(time).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return isSentByCurrentUser ? (
    <div className={styles.userDialog}>
      <p className={styles.userName}>me</p>
      <div className={styles.messageCloud}>
        <p>{message}</p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  ) : (
    <div className={styles.authorDialog}>
      <div className={styles.messageCloud}>
        <p>{message}</p>
        <p className={styles.time}>{time}</p>
      </div>
      <p className={styles.userName}>{user}</p>
    </div>
  )
}

export default Message
