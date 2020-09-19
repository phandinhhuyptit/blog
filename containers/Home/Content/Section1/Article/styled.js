import styled, { css } from "styled-components";

export const ArticleWrapper = styled.div`
  .post {
    margin-bottom: 20px;
    display: flex;
    flex-flow: row wrap;
    .article-image {
      display: block;
      flex: 0 0 30%;
      max-width: 30%;
      .post-image {
        .link-img {
          border-radius: 10px;
          background: url("https://4.bp.blogspot.com/-ErbdxeZwShM/Wtim66MAp2I/AAAAAAAABMM/71yhaGOtSy8Fi6V94khVDd5qOSy1247IACLcBGAs/s1600/pexels-photo-368774.jpeg");
          height: 100px;
          display: block;
          width: 100px;
          background-size: cover;
          background-position: center;
        }
      }
    }
    .article-content {
      box-sizing: border-box;
      display: block;
      flex: 0 0 70%;
      max-width: 70%;
      .entry-header {
        .entry-header-title {
          .entry-title {
            font-size: 36px;
            line-height: 1.2;
            margin-bottom: 15px;
            a {
              font-size: 14px;
              line-height: 14px;
              font-weight: 600;
              padding-top: 10px;
              display: table;
              font-family: "Nunito", sans-serif;
              font-weight: 400;
              color: #2e2e2e;
            }
          }
        }
      }
      .article-meta {
        color: rgb(142, 142, 149);
        padding-top: 5px;
        display: table;
        .posted-on {
          height: 20px;
          a {
            display: inline-flex;
            align-items: flex-end;
            color: rgb(142, 142, 149);
            font-weight: 400;
            font-size: 12px;
            .icon-clock {
              color: rgb(142, 142, 149);
              width: 15px;
              height: 14px;
              margin-right: 1px;
            }
          }
        }
      }
    }
  }
`;
