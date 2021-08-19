import styles from '../../styles/Navbar.module.css'
import { useState, useEffect, useRef } from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { MenuItems } from './MenuItems'
import Link from 'next/link'
import Button from '../Button'

const Navbar = () => {
  const [session, loading]: any = useSession()
  const [clicked, setClicked] = useState(false)

  return (
    <nav className={styles.navbar_items}>
      <Link href='/'>
        <a>
          <h1 className={styles.navbar_logo}>MECO</h1>
        </a>
      </Link>
      <div className={styles.menu_icon} onClick={() => setClicked(!clicked)}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? styles.nav_menu + ' ' + styles.active : styles.nav_menu}>
        {MenuItems.map((item, idx) => {
          return (
            <li key={idx + new Date().toDateString()} onClick={() => setClicked(!clicked)}>
              <Link href={item.url}>
                <a className={styles[item.cName]}>{item.title}</a>
              </Link>
            </li>
          )
        })}
        <div className={styles.user_control}>
          {!session ? (
            <Button onClick={() => signIn('google', { callbackUrl: 'https://meco-chat.vercel.app/chat' })}>
              Sign In
            </Button>
          ) : (
            <div className={styles.flex}>
              <div> Hi {session.user.name}, </div>
              <div>
                <Button onClick={() => signOut()}>Sign Out</Button>
              </div>
            </div>
          )}
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
