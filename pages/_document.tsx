import React from 'react';

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <title>My new cool app</title> */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&family=Montserrat:wght@300;900&family=Playfair+Display&family=zilla:wght@300&family=Source+Code+Pro:wght@300&family=IBM+Plex+Mono:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
