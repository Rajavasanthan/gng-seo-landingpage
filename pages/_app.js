import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // disabel right click in the website
  useEffect(() => {
    window.document.addEventListener("contextmenu", (e) => {
      e.preventDefault()
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
