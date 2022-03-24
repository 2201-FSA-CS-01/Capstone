import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppWrapper } from '../components/context/state.js';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </SessionProvider>
  );
}
