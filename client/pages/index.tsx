import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Main</h1>
      <Link href='/chat'>
        <a>Protected Content</a>
      </Link>
    </>
  )
}
