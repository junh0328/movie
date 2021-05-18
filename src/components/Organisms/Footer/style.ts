import styled from '@emotion/styled';

// 푸터 전체를 감싸는 부분
export const FooterWrap = styled.div`
  max-width: 980px;
  margin: 20px auto 0;
  padding: 0 4%;
  color: gray;
`;

// SNS 링크 전체를 감싸는 부분
export const SocialLinks = styled.div`
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  font-size: 28px;
  margin-right: 25px;
  color: gray;
`;

// 기타 넷플릭스 페이지를 링크 해주는 부분
export const MemberFooterLink = styled.div`
  color: gray;
  font-size: 13px;
`;

export const MemberFootLinkUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 0 14px;
  padding: 0;
  margin-bottom: 14px;
`;

export const MemberFooterLinkLI = styled.li`
  list-style: none;
  flex-basis: 25%;
  margin-bottom: 16px;
`;

// 서비스 코드 버튼을 감싸는 div
export const MemberFooterService = styled.div`
  margin-bottom: 20px;

  & button {
  }
`;

// 서비스 코드 버튼을 감싸는 div 내부 버튼
export const FooterServiceBtn = styled.button`
  padding: 0.5em;
  border: 1px solid gray;
  background: 0 0;
  font-size: 13px;
  cursor: pointer;
`;

// 카피라이트 wrapper
export const MemberFooterCopyRight = styled.div`
  padding-bottom: 15px;
`;

export const MemberFooterCopyRightDiv = styled.div``;
