import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #1a1a1a;
  margin: 0 auto;
  width: 100%;
  display: inline-block;

  .navbar-nav ul {
    white-space: nowrap;
    width: 100%;
    margin: 4px;
  }

  .navbar-nav li {
    display: inline-block;
    width: 35%;
    font-size: 15px;
      font-weight: bold;

    .nav-link {
      color: #fff;
        &:hover {
          color: #939292;
          transition: all 0.4s ease;
        }
        &:focus {
          color: #939292;
        }
      }

  }
  
    .navbar-brand {
      padding: 1px;
      margin:0;
      font-size: 29px;
      font-weight: bold;

      &:hover {
        color: #4065e5;
        transition: all 0.3s ease;
      }
    }
    
  .nav-link {
    .search-icon {
      margin: 0;
      padding: 0;
      color: #fff;
      font-size: 24px;

      &:hover {
        color: grey;
      }
  }
`;



