import '@/styles/globals.css'
import { SocketProvider } from './api/context/socket';
export default function App({ Component, pageProps }) {
  return (
    <SocketProvider>
      <Component {...pageProps} />
    </SocketProvider>
  )
}
