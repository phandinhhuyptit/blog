import React, { useState } from "react";
import { Col, Row } from "antd";
import { HeaderWrapper } from "./styled";

const Header = () => {

  const [collapsed,setCollapsed ] = useState(false) 


  return (
    <HeaderWrapper collapsed={collapsed}>
      <div className="container">
        <Row className="header-wrapper">
          <Col span={collapsed ? 9 : 5} className="left-header">
            <div className="logo-wrapper">
              <img
                width="115"
                height="40"
                alt="tinhte"
                src="https://tinhte.vn/static/images/Tinhte2020Logo.svg"
              />
            </div>
            <div className="search">
              <div className="collapsed">
                <input className={`input-search ${collapsed ? 'open' : '' }`}  type="text" placeholder="Nhập gì để tìm..." />
                <div className="button-search">
                  <img onClick={() => setCollapsed(true)} src="img/search.svg" alt="search" />
                </div>
              </div>
            </div>
          </Col>
          <Col span={12} className="middle-header">
            <div className="menu-wrapper">
              <div className="menu-icon">
                <span className="icon">
                  <img src="img/forum.svg" alt="forum" />
                </span>
                <span className="icon-label"> Diễn Đàn </span>
              </div>
              <div className="menu-icon">
                <span className="icon">
                  <img src="img/forum.svg" alt="forum" />
                </span>
                <span className="icon-label"> Diễn Đàn </span>
              </div>
              <div className="menu-icon">
                <span className="icon">
                  <img src="img/forum.svg" alt="forum" />
                </span>
                <span className="icon-label"> Diễn Đàn </span>
              </div>
              <div className="menu-icon">
                <span className="icon">
                  <img src="img/forum.svg" alt="forum" />
                </span>
                <span className="icon-label"> Diễn Đàn </span>
              </div>
            </div>
          </Col>
          <Col span={collapsed ? 3 : 7} className="right-header">
            <div className="login-wrapper">
                <div className="login-label">Đăng Nhập</div>   
            </div>
          </Col>
        </Row>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
