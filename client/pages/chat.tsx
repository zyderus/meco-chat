import styles from '../styles/chat.module.css'
import { useSession, getSession } from 'next-auth/client'
import Image from 'next/image'
import Link from 'next/link'
import ChatBox from '../components/ChatBox'

export default function Chat() {
  const [session, loading]: any = useSession()

  if (loading) return null
  if (!loading && !session) return null

  return (
    <div className={styles.container}>
      <ChatBox user={session.user} />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  let user = session && session.user

  /* If user is NOT logged in, then redirect */
  if (!user) {
    return {
      redirect: { destination: '/', permanent: false },
    }
  }

  return {
    props: {
      session: session,
    },
  }
}
