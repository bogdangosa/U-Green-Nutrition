import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import SimpleButton from '@/components/Buttons/SimpleButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>U Green Nutrition</title>
        <meta name="description" content="Generate your recipe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <section className={styles.HeroSection}>
              <div className={styles.hero_text_container}>
                  <h1 className={styles.HeroTitle}>Find the perfect diet plan for your needs</h1>
                  <p className={styles.HeroSubTitle}>Fusce erat leo, tincidunt ut orci non, lobortis posuere risus. Donec maximus odio in orci maximus posuere. Aenean nec tincidunt lorem.</p>
                  <SimpleButton>Start Now</SimpleButton>
              </div>
              <div className={styles.hero_Image_container}>
                <img src="hero_background.svg"></img>
                <img src='healthy_plate.png' className={styles.hero_plate_image}></img>
              </div>

          </section>

      </main>
    </>
  )
}
