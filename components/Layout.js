import { Fragment } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
