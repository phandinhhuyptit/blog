import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100vw;
  box-shadow: 0 2px 4px 0 rgba(182, 182, 182, 0.5);
  background-color: white;
  z-index: 1000;
  position: relative;

  .header-wrapper {
     padding-top : 8px;
     padding-bottom: 8px; 
    .left-header {
      display: flex;
      .logo-wrapper {
        margin-right: 33px;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .search {
        display: flex;
        justify-content: center;
        align-items: center; 
        .collapsed {
          position: relative;
          display: flex;
          align-items: center;
          .input-search {
            width: 0px;
            border: none;
            outline: none;
            padding-right: 5px;
            font-size: 14px;
            padding-right: calc(15px + 42px);
            display: block;
            transition: width 0.3s ease;
            padding: 0;
          }
          .button-search {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: #e5e6ec;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      .open {
        width: 180px!important;
      } 
    }
    .middle-header {
      .menu-wrapper {
        display: flex;
        .menu-icon {
          padding: 6px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          display: flex;
          align-items: center;
          &:hover { 
              
          }  
          .icon {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            background-color: #e5e6ec;
            display: flex;
          }
          .icon-label{
            font-weight: bold;
            margin-left: 10px;
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .right-header { 
        .login-wrapper {
            height: 100%;
          .login-label{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;  
          }     
        }
    }
  }
`;
