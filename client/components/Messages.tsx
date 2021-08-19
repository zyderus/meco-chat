import styles from '../styles/Messages.module.css'
import Message from './Message'

const Messages = ({ messages, name }: any) => (
  <div className={styles.messages}>
    {messages.map((message: any, i: number): any => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </div>
)

export default Messages
