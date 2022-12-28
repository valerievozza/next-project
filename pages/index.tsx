import type { GetStaticProps, NextPage } from "next"
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from "../types"
import imageLoader from "../imageLoader"

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {characters.map((character) => {
        return <div key={character.id}>
          
          <Link href={`/characters/${character.id}`}>
              <h3>{character.name}</h3>

              <Image
                loader={imageLoader}
                unoptimized
                src={character.image}
                alt={character.name}
                width="200"
                height="200"
              />  
          </Link>
        </div>
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async(context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character")
  const { results }: GetCharacterResults = await res.json()

  return {
    props: {
      characters: results,
    },
  }
}

export default Home