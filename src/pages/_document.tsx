import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          html, body {
            background-color: #0E0E0E !important;
            margin: 0;
            padding: 0;
          }

          .content-animate {
            opacity: 0;
          }
        `}</style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer />
        <script defer>{`
          window.addEventListener('load', function() {
            gsap.fromTo('.content-animate', 
              {
                opacity: 0,
                scale: 0.8,
                filter: 'blur(15px)'
              },
              {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: 'power1.inOut'
              }
            );
          });
        `}</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}