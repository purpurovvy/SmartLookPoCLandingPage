'use client';
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <div style={{display:'flex', flexDirection:'column'}}>
          <a style={{marginTop:'16px'}} href="https://www.google.com/maps/dir/?api=1&destination=52.6522,15.6129&origin=52.5257,16.852"><button type="button">Standard link</button></a>
          <a style={{marginTop:'16px'}} href="geo:52.5257,16.852?q=52.6522,15.6129"><button type="button" >Android maps</button></a>
          <a style={{marginTop:'16px'}} href="maps://?saddr=52.5257,16.852&daddr=52.6522,15.6129"><button type="button">iOS maps</button></a>
          </div>
      <br/>
      <br/>
      <br/>
          <div style={{display:'flex', flexDirection:'column'}}>
              <a style={{marginTop:'16px'}}  onClick={()=>window.location.href='https://www.google.com/maps/dir/?api=1&destination=52.6522,15.6129&origin=52.5257,16.852'} href="https://www.google.com/maps/dir/?api=1&destination=52.6522,15.6129&origin=52.5257,16.852"><button type="button">Standard link</button></a>
              <a style={{marginTop:'16px'}} onClick={()=>window.location.href='geo:52.5257,16.852?q=52.6522,15.6129'} href="geo:52.5257,16.852?q=52.6522,15.6129"><button type="button" >Android maps</button></a>
              <a style={{marginTop:'16px'}} onClick={()=>window.location.href='maps://?saddr=52.5257,16.852&daddr=52.6522,15.6129'} href="maps://?saddr=52.5257,16.852&daddr=52.6522,15.6129"><button type="button">iOS maps</button></a>
          </div>
      </div>
    </main>
  )
}
