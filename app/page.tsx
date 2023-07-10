import Image from 'next/image'
import styles from './page.module.css'
import { MyIframe } from './MyIframe'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>My Iframed website:</p>
        <MyIframe />
      </div>
    </main>
  )
}
