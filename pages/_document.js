import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta content="Free HTML Templates" name="keywords" />
          <meta content="Free HTML Templates" name="description" />

          <link href="img/favicon.ico" rel="icon" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
            rel="stylesheet"
          />

          <link
            href="lib/owlcarousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          />

          <link
            href="lib/owlcarousel/assets/owl.theme.default.min.css"
            rel="stylesheet"
          />

          <link href="css/style.css" rel="stylesheet" />


        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
          <script src="lib/easing/easing.min.js"></script>
          <script src="lib/owlcarousel/owl.carousel.min.js"></script>
          <script src="js/main.js"></script>
          <script src="https://ajax.cloudflare.com/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="455171707906778b87c4c746-|49" defer=""></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
