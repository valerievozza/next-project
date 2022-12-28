import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layer'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout (<Component {...pageProps} />)
}
