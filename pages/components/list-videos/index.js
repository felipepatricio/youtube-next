import React from 'react'
import styles from './styles/ListVideos.module.css'

function ListVideos(data) {
  return (
    <ul>
      {data.items.map(({id, snippet = {} }) => {
        const {title, description, thumbnails = {}, resourceId = {}} = snippet
        const {medium} = thumbnails
        return (
          <li key={id} className={styles.card}>
            <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
              <p>
                <img width={medium.width} height={medium.height} src={medium.url} alt="" />
              </p>
            </a>

            <h3 className={styles.title}>{title}</h3>
          </li>
        )  
      })}
    </ul>
  )
}

export default ListVideos
