import React from 'react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}></ThemeProvider>
     {/*  <Navigation /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
