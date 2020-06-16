import Document, {
  DocumentContext,
  Html,
  Main,
  Head,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class CatVDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>CatV - Rajk & Cookie</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
