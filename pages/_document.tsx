import { Html, Main, NextScript, Head } from 'next/document';

const document = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="allow"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500&family=Rubik+Bubbles&family=Sora&family=Unbounded:wght@200;300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <div id="portal"></div>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default document;
