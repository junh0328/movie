import {
  SocialLinks,
  MemberFooterLink,
  MemberFooterService,
  MemberFooterCopyRight,
  FooterWrap,
  MemberFootLinkUl,
  MemberFooterLinkLI,
  MemberFooterCopyRightDiv,
  FooterServiceBtn,
  SocialLink,
} from './style';
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im';

function Footer(): JSX.Element {
  return (
    <FooterWrap>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com/NetflixKR" target="_blank" rel="noreferrer">
          <ImFacebook2 />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/netflixkr/" target="_blank" rel="noreferrer">
          <ImInstagram />
        </SocialLink>
        <SocialLink href="https://twitter.com/netflixkr" target="_blank" rel="noreferrer">
          <ImTwitter />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured"
          target="_blank"
          rel="noreferrer"
        >
          <ImYoutube />
        </SocialLink>
      </SocialLinks>
      <MemberFooterLink>
        <MemberFootLinkUl>
          <MemberFooterLinkLI>자막 및 음성</MemberFooterLinkLI>
          <MemberFooterLinkLI>음성 지원</MemberFooterLinkLI>
          <MemberFooterLinkLI>고객 센터</MemberFooterLinkLI>
          <MemberFooterLinkLI>기프트카드</MemberFooterLinkLI>
          <MemberFooterLinkLI>미디어 센터</MemberFooterLinkLI>
          <MemberFooterLinkLI>투자 정보(IR)</MemberFooterLinkLI>
          <MemberFooterLinkLI>입사 정보</MemberFooterLinkLI>
          <MemberFooterLinkLI>이용 약관</MemberFooterLinkLI>
          <MemberFooterLinkLI>개인정보</MemberFooterLinkLI>
          <MemberFooterLinkLI>법적 고지</MemberFooterLinkLI>
          <MemberFooterLinkLI>쿠키 설정</MemberFooterLinkLI>
          <MemberFooterLinkLI>회사 정보</MemberFooterLinkLI>
          <MemberFooterLinkLI>문의하기</MemberFooterLinkLI>
        </MemberFootLinkUl>
      </MemberFooterLink>
      <MemberFooterService>
        <FooterServiceBtn>서비스 코드</FooterServiceBtn>
      </MemberFooterService>
      <MemberFooterCopyRight>
        <MemberFooterCopyRightDiv>
          넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0058
        </MemberFooterCopyRightDiv>
        <MemberFooterCopyRightDiv>대표: 레지널드 숀 톰프슨</MemberFooterCopyRightDiv>
        <MemberFooterCopyRightDiv>이메일 주소: korea@netflix.com</MemberFooterCopyRightDiv>
        <MemberFooterCopyRightDiv>
          주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161
        </MemberFooterCopyRightDiv>
        <MemberFooterCopyRightDiv>클라우드 호스팅: Amazon Web Services Inc.</MemberFooterCopyRightDiv>
      </MemberFooterCopyRight>
    </FooterWrap>
  );
}

export default Footer;
