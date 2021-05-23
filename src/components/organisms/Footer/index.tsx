import { SocialLinks, MemberFooterLink, MemberFooterService, MemberFooterCopyRight, FooterWrap } from './style';
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im';

function Footer(): JSX.Element {
  return (
    <FooterWrap>
      <SocialLinks>
        <a href="https://www.facebook.com/NetflixKR" target="_blank" rel="noreferrer">
          <ImFacebook2 />
        </a>
        <a href="https://www.instagram.com/netflixkr/" target="_blank" rel="noreferrer">
          <ImInstagram />
        </a>
        <a href="https://twitter.com/netflixkr" target="_blank" rel="noreferrer">
          <ImTwitter />
        </a>
        <a href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured" target="_blank" rel="noreferrer">
          <ImYoutube />
        </a>
      </SocialLinks>
      <MemberFooterLink>
        <ul>
          <li>자막 및 음성</li>
          <li>음성 지원</li>
          <li>고객 센터</li>
          <li>기프트카드</li>
          <li>미디어 센터</li>
          <li>투자 정보(IR)</li>
          <li>입사 정보</li>
          <li>이용 약관</li>
          <li>개인정보</li>
          <li>법적 고지</li>
          <li>쿠키 설정</li>
          <li>회사 정보</li>
          <li>문의하기</li>
        </ul>
      </MemberFooterLink>
      <MemberFooterService>
        <button>서비스 코드</button>
      </MemberFooterService>
      <MemberFooterCopyRight>
        <div>
          <div>
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0058
          </div>
          <div>대표: 레지널드 숀 톰프슨</div>
          <div>이메일 주소: korea@netflix.com</div>
          <div>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
          <div>클라우드 호스팅: Amazon Web Services Inc.</div>
        </div>
      </MemberFooterCopyRight>
    </FooterWrap>
  );
}

export default Footer;
