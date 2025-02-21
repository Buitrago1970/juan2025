import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Abril_Fatface, Montserrat } from 'next/font/google';

export const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: '400'
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
// https://drive.google.com/file/d/1D4uRoxs9gIiujdHKGtk5HqngyrilfB91/view?usp=share_link