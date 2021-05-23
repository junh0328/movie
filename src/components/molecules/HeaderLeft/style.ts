import styled from '@emotion/styled';

export const HeaderLeftWrapper = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  color: #e5e5e5;

  & a {
    margin-right: 25px;
    font-size: 25px;
    text-decoration: none;
    color: #e50914;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    & img {
      width: 110.5px;
    }
  }
  & ul {
    padding-left: 0;
    margin-bottom: 0;
    display: flex;
    list-style: none;
    & li {
      & a {
        font-size: 1rem;
        color: #e5e5e5;
      }
      & a:hover {
        transition-duration: 0.4s;
        color: #b3b3b3;
      }
    }
  }
`;
