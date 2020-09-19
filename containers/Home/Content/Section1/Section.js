import React from "react";
import { SectionWrapper } from "./styled";
import { Row, Col } from "antd";
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Article from "./Article";

const Section = () => {
  return (
    <SectionWrapper>
      <h2 className="title">Travel the world</h2>
      <div className="right-all">
        <a href="www.google.com" className="link">
          {" "}
          View All{" "}
        </a>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <Row gutter={24} className="list">
            <Col span={12}>
              <article className="post">
                <div className="parentover">
                  <div className="list-media">
                    <img
                      className="img-content"
                      alt="Capturing the correct moment"
                      src="https://4.bp.blogspot.com/-EMeuhDkApoc/WtinIelAkHI/AAAAAAAABMQ/mlss9kdL1fEL1s-6aKLN7GI3RX3pmjDNgCLcBGAs/s1600/pexels-photo-125521.jpeg"
                    />
                    <div className="post-share">
                      <div className="cell">
                        <ul className="list-inline">
                          <li>
                            <FontAwesomeIcon
                              className="icon-facebook"
                              icon={faFacebookF}
                            />
                          </li>
                          <li>
                            <FontAwesomeIcon
                              className="icon-google"
                              icon={faGooglePlusG}
                            />
                          </li>
                          <li>
                            <FontAwesomeIcon
                              size="lg"
                              className="icon-twitter"
                              icon={faTwitter}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="box-list">
                    <div className="box-inside">
                      <div className="list-content">
                        <div className="entry-header">
                          <div className="entry-title">
                            <a href="#">Capturing the correct moment</a>
                          </div>
                        </div>
                      </div>
                      <div className="article-meta">
                        <span className="byline">
                          <span className="author">
                            <a href="#">
                              <FontAwesomeIcon
                                className="icon-user"
                                icon={faUserCircle}
                              />
                              <span> Blossom Themes</span>
                            </a>
                          </span>
                          <span className="posted-on">
                            <a href="#">
                              <FontAwesomeIcon
                                className="icon-clock"
                                icon={faClock}
                              />
                              <time
                                class="entry-date published updated"
                                datetime="2018-04-19T07:27:00.000-07:00"
                              >
                                {" "}
                                April 19, 2018
                              </time>
                            </a>
                          </span>
                        </span>
                        <span></span>
                      </div>
                      <div className="entry-content">
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam,...
                        </div>
                        <a className="btn-read">
                            READ MORE                            
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
            <Col className="list-post" span={12}>
              <Article />
              <Article />
              <Article />
              <Article />
            </Col>
          </Row>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section;
