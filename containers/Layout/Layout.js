import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { LayoutWrapper } from "./styled";

const Header = dynamic({ loader: () => import("../../components/Header") });
const Footer = dynamic({ loader: () => import("../../components/Footer") });


const Layout = (props) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{props.children}</main>
    </LayoutWrapper>
  );
};

export default Layout;
