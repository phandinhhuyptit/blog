import React, { Component } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Layout = dynamic({ loader: () => import('../containers/Layout') })
const Home = dynamic({ loader: () => import('../containers/Home') })

const HomePage = (props) => { // eslint-disable-line
    return (
        <Layout {...props}>
          <Head>
            <title>Trang Chủ</title>

            {/* SEO */}
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="keywords" content="Blog | Trang Chủ" />
            <meta name="description" content="Blog | Trang Chủ" />
            <meta name="type" content="website" />
            <meta name="robots" content="INDEX, FOLLOW" />
            <meta name="language" content="Vietnamese" />

            {/* Open Graph data */}
            <meta proprty="fb:app_id" content="380743335865666" />
            <meta property="og:type" content="news" />
            <meta property="og:url" content="" />
            <meta property="og:title" content="Blog | Trang Chủ" />
            <meta property="og:image" content="" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:description" content="Blog | Trang Chủ" />
            <meta property="og:site_name" content="" />
            <meta property="og:locale" content="vi_VN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="" />
            <meta name="twitter:title" content="Blog | Trang Chủ" />
            <meta name="twitter:description" content="Blog | Trang Chủ" />
            <meta name="twitter:image" content="" />
          </Head>
          <Home/>
        </Layout>
    )
}

export default HomePage