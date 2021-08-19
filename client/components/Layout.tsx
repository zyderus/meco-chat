import styles from '../styles/Layout.module.css'
import Navbar from '../components/Navbar/Navbar'

const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <main>{children}</main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  )
}

export default Layout
