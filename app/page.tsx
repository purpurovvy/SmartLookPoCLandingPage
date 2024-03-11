import styles from './page.module.css'
import { MyIframe } from './MyIframe'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <div style={{display:'flex', flexDirection:'column'}}>
          <a style={{marginTop:'16px'}} href="https://www.google.com/maps/dir/?api=1&destination=52.6522,15.6129&origin=52.5257,16.852"><button type="button">Standard link</button></a>
          <a style={{marginTop:'16px'}} href="geo:37.7749,-122.4194?q=37.8199,-122.4783"><button type="button">Android maps</button></a>
          <a style={{marginTop:'16px'}} href="maps://?saddr=37.7749,-122.4194&daddr=37.8199,-122.4783"><button type="button">iOS maps</button></a>
          </div>
      </div>
    </main>
  )
}
