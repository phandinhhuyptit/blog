import React from "react";
import { faClock, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArticleWrapper } from "./styled";

const Article = () => {
  return (
    <ArticleWrapper>
      <article className="post">
        <div className="article-image">
          <div className="post-image">
            <a href="#" className="link-img"></a>
          </div>
        </div>
        <div className="article-content">
          <div className="entry-header">
            <div className="entry-header-title">
              <h3 className="entry-title">
                <a href="#">Art is the way to express it</a>
              </h3>
            </div>
          </div>
          <div className="article-meta">
            <span className="posted-on">
              <a href="#">
                <FontAwesomeIcon className="icon-clock" icon={faClock} />
                <time
                  class="entry-date published updated"
                  datetime="2018-04-19T07:27:00.000-07:00"
                >
                  {" "}
                  April 19, 2018
                </time>
              </a>
            </span>
          </div>
        </div>
      </article>
    </ArticleWrapper>
  );
};

export default Article;
