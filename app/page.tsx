import styles from './page.module.css'
import { MyIframe } from './MyIframe'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <div style={{display:'flex', flexDirection:'column'}}>
          <a href="https://www.google.com/maps/dir/?api=1&destination=52.6522,15.6129&origin=52.5257,16.852">Standard link</a>
          <a href="geo:37.7749,-122.4194?q=37.8199,-122.4783">Link to android maps</a>
          <a href="maps://?saddr=37.7749,-122.4194&daddr=37.8199,-122.4783">Link to iOS maps</a>
          </div>
      </div>
    </main>
  )
}
