import React from "react";
import Layout from "../components/layouts/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;