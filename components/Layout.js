import { Fragment } from "react";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>NIKKOFE</title>
        <meta charset="utf-8" />
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

        <link href="css/style.css" rel="stylesheet" />
      </Head>
      {children}
    </Fragment>
  );
};

export default Layout;
