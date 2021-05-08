import styled from "@emotion/styled";

export const FooterWrap = styled.div`
  max-width: 980px;
  margin: 20px auto 0;
  padding: 0 4%;
  color: gray;
`;

export const SocialLinks = styled.div`
  margin-bottom: 1rem;
  & a {
    font-size: 28px;
    margin-right: 25px;
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
    margin: 0 0 14px;
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
