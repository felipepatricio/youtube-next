import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ListVideos from './components/list-videos'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'

export async function getServerSideProps() {
  const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=OLAK5uy_mBB5m-9kfXxsVax1g_rwAjZNCzoBajE4M&key=${process.env.NEXT_YOUTUBE_API_KEY}`)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Paraíso Portátil
        </h1>

        <div className={styles.grid}>
          <ListVideos items={data.items} />
        </div>
      </main>

    </div>
  )
}
