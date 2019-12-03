import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="has-navbar-fixed-top">
        <Head />
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
          <style jsx global>
            {``}
          </style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
