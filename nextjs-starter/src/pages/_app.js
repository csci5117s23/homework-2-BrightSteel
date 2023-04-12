import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Redirect from './redirect';

// const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const clerk_pub_key = 'pk_test_bWFnaWNhbC1tb2xseS05Mi5jbGVyay5hY2NvdW50cy5kZXYk'

export default function App({ Component, pageProps }) {
  
  return (
  <ClerkProvider publishableKey={clerk_pub_key} {...pageProps} >

    <Component {...pageProps} />
    <SignedOut>
        <RedirectToSignIn></RedirectToSignIn>
    </SignedOut>
    <SignedIn>
      <Redirect
        url='/todos'
      />
    </SignedIn>
  </ClerkProvider>
  )
}