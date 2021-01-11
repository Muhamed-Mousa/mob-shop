import styled from 'styled-components';

export const Collection = styled.div`
  .home-page {
    min-width: 25%;
    height: 240px;
    display: inline-block;
    // border: 1px solid black;
    padding-top:2px;
    margin-top:2px;
    overflow: hidden;

    .background-image {
      width: auto;
      height: 100%;
      background-size: cover;
      background-position: center;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.4s ease;
      }
      
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 96px;
      

      .title {
        font-size: 16px;
      }

      .subtitle {
        font-size: 14px;
        padding-top: 10px;
      }
    }
  }
`;

