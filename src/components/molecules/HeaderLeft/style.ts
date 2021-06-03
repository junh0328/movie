import styled from '@emotion/styled';
import { Menu } from 'antd';

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

export const CustomMenu = styled(Menu)`
  margin-top: 30px;
  background: black;
  width: 400px;
  border-top: 3px solid white;
  cursor: pointer;

  & :hover {
    background: transparent(0, 0, 0, 0.5);
  }
  & .ant-dropdown-menu-item-active {
    background: rgba(255, 255, 255, 0.1);
    & :hover {
      color: white;
    }
    & :focus {
      font-weight: bolder;
    }
  }
`;

export const CustomMenuItem = styled(Menu.Item)`
  cursor: pointer;
  padding: 20px;

  & a {
    color: white;
    text-align: center;
  }
`;
