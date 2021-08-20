import styles from '../styles/Hero.module.css'
import { together } from '../svgs/together'
import Button from './Button'
import { signIn, signOut, useSession } from 'next-auth/client'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.call}>
          <div className={styles.messageBox}>
            <h1>People Want to Hear You</h1>
            <p className={styles.message}>
              Talk to anyone and everyone you meet here. New people you talk - new things you learn. With new knowledge
              do some goodness and share your experience with others.
            </p>
            <Button
              className='btn'
              onClick={() => signIn('google', { callbackUrl: 'https://meco-chat.vercel.app/chat' })}
            >
              Start Now
            </Button>
          </div>
        </div>
        <div className={styles.svg}>{together}</div>
      </div>
    </div>
  )
}

export default Hero
