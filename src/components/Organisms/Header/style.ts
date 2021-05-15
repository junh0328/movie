import styled from "@emotion/styled";

export const PinningHeader = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: transparent;

  & .black {
    width: 100%;
    position: fixed;
    transition: ease-in-out;
    transition-duration: 0.6s;
    background-color: black;
  }
`;

export const PinningHeaderContainer = styled.div`
  left: 0;
  right: 0;
  z-index: 1;
`;

export const MainHeader = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  padding-left: 4%;
  padding-right: 4%;

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
        font-size: 12px;
        color: #e5e5e5;
      }
      & a:hover {
        transition-duration: 0.4s;
        color: #b3b3b3;
      }
    }
  }
`;

export const SecondaryNavigation = styled.div`
  color: #e5e5e5;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  right: 4%;
  top: 0;
  height: 100%;
`;

export const NavElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  margin-right: 20px;

  &.search-focused {
    transition: 500ms;
    background-color: black;
    border: 1px solid #e5e5e5;
    padding: 5px;

    & form {
      background: black;
    }
  }
  & input {
    border: none;
    margin-left: 10px;
    width: 200px;
    color: white;
    background-color: transparent;
  }
  & input:focus {
    outline: none;
  }
  & :last-child:hover svg:last-child {
    transition: 500ms;
    transform: rotate(-180deg);
  }
`;

export const ToggleWrapper = styled.div`
  margin-top: 5px;
  word-break: keep-all;
`;
