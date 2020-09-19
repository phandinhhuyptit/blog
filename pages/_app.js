import "antd/dist/antd.css";
import { GlobalStyle } from "../theme/global/index.styled";
import Head from 'next/head'
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />  
          {/* <link rel="icon" type="image/png" href="https://clinic.weva.vn/favicon.ico"></link> */}
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />    
      <GlobalStyle />
    </React.Fragment>
  );s
}

export default MyApp;
