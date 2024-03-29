import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'
import Head from 'next/head'
import Redirect from './redirect'
import NavBar from '../components/navbar'
import { useRouter } from 'next/router'
import styles from '../styles/todos.module.css'
import 'bulma/css/bulma.min.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <h1 className={styles.body + " columns is-centered"} style={{fontSize: "xx-large", fontWeight: "bold"}}>Ryan's Todo App</h1>
      <div className="columns is-centered" style={{paddingTop: "1em"}}>
        <SignInButton></SignInButton>
      </div>
      <SignedIn>
      <Redirect
        url='/todos'
      />
      </SignedIn>
    </>
  )
}

export const RedirectNonLoggedIn = () => {

  return (
    <SignedOut>
    <Redirect
        url='/'
      />
  </SignedOut>
  )
}
