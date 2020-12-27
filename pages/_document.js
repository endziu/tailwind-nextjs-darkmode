import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script src="theme.js"></script>
          <Main />
          <NextScript />
        </body>
        <script src="theme2.js"></script>
      </Html>
    )
  }
}

export default MyDocument