import styled from "@emotion/styled";

export const PinningHeader = styled.div`
  height: 70px;
  background-color: #141414;
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
  padding: 0 4%;

  & a {
    margin-right: 25px;
    font-size: 25px;
    text-decoration: none;
    color: #e50914;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    & img {
      width: 92.5px;
    }
  }
  & ul {
    padding-left: 0;
    margin-bottom: 0;
    display: flex;
    list-style: none;
    & li {
      & a {
        font-size: 14px;
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

  & div {
    margin-right: 20px;
    display: block;
    font-size: 14px;
    & div {
      display: inline-block;
      font-size: 14px;
    }
  }
`;

export const Footer = styled.div`
  max-width: 980px;
  margin: 20px auto 0;
  padding: 0 4%;
  color: gray;
`;

export const SocialLinks = styled.div`
  margin-bottom: 1rem;
  & a {
    margin-right: 15px;
    color: gray;
  }
`;

export const MemberFooterLink = styled.div`
  color: gray;
  font-size: 13px;

  & ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 0 14px 0;
    padding: 0;
    margin-bottom: 14px;
    & li {
      list-style: none;
      flex-basis: 25%;
      margin-bottom: 16px;
    }
  }
`;
export const MemberFooterService = styled.div`
  margin-bottom: 20px;

  & button {
    padding: 0.5em;
    border: 1px solid gray;
    background: 0 0;
    font-size: 13px;
  }
`;

export const MemberFooterCopyRight = styled.div`
  padding-bottom: 15px;
`;
