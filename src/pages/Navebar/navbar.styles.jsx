import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #1a1a1a;
 
  .navbar-nav ul {
    
    white-space: nowrap;
    margin: 0 auto;
    
  }

  .navbar-nav li {
    display: inline-block;
    width: 27%;
 
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
  
    .navbar-collapse{
      
    }
    .navbar-brand {
      padding: 1px;
      margin:0 auto;
      font-size: 29px;
      // font-weight: bold;
      &:hover {
        color: #4065e5;
        transition: all 0.3s ease;
      }
    }
    
  .nav-link {
    .search-icon {
      color: #fff;
      font-size: 24px;
      &:hover {
        color: grey;
      }
  }
`;
