import '../styles/globals.css'
import { NavigationBar } from '../component/navigationBar'
import  '../styles/navigationBar.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  
  return (
  <>
  <Head>
  <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
  </Head>
  <NavigationBar/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
