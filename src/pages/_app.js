import MainLayout from '@/components/Layouts/MainLayout'
import '@/styles/globals.css'
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({ 
    weight: ['400','500','600','700'],
    subsets: ['latin']
})


export default function App({ Component, pageProps }) {
  return (
  <div className={open_sans.className}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </div>)
}
