import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, Dropdown, Switch as Switcher } from "antd";
import {
  Footer,
  MainHeader,
  PinningHeader,
  PinningHeaderContainer,
  SecondaryNavigation,
  SocialLinks,
  MemberFooterLink,
  MemberFooterService,
  MemberFooterCopyRight,
} from "./style";
import { Global, css } from "@emotion/react";
import neflix_logo from "./images/neflix_logo.png";
import { FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { RiArrowDropDownFill } from "react-icons/ri";
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";

import Home from "@/pages/Home";
import About from "./pages/About";

function App(): JSX.Element {
  const [scrolling, setScrolling] = useState<Boolean>(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrolling(false);
    } else if (window.scrollY > 30) {
      setScrolling(true);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const menu = (
    <Menu style={{ padding: 20, wordBreak: "break-word" }}>
      <Menu.Item key="0" style={{ wordBreak: "inherit", width: "250px" }}>
        <span style={{ marginRight: 10, marginBottom: 10 }}>
          작품 상세 정보
        </span>
        <Switcher />
        <div>임시 토글</div>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (scrolling) {
      console.log("scrolled!");
    }
  });

  return (
    <Router>
      <Global
        styles={css`
          body {
            background-color: #141414;
            color: #e5e5e5;
          }
        `}
      />
      <PinningHeader>
        <PinningHeaderContainer>
          <MainHeader className={scrolling ? "black" : ""}>
            <a href="/">
              <img src={neflix_logo} alt="netflix_logo" />
            </a>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/users">TV 프로그램</Link>
              </li>
              <li>
                <Link to="/users">영화</Link>
              </li>
              <li>
                <Link to="/about">NEW! 요즘 대세 콘텐츠</Link>
              </li>
            </ul>
            <SecondaryNavigation>
              <div>
                <div>
                  <FaSearch />
                </div>
                <div>키즈</div>
                <div>
                  <BsFillBellFill />
                </div>
                <div>
                  <Dropdown overlay={menu}>
                    <span
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <GoSettings style={{ marginRight: 2 }} />
                      <RiArrowDropDownFill style={{ marginLeft: 2 }} />
                    </span>
                  </Dropdown>
                </div>
              </div>
            </SecondaryNavigation>
          </MainHeader>
        </PinningHeaderContainer>
      </PinningHeader>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <p>users</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer>
        <SocialLinks>
          <a href="/">
            <ImFacebook2 />
          </a>
          <a href="/">
            <ImInstagram />
          </a>
          <a href="/">
            <ImTwitter />
          </a>
          <a href="/">
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
              넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
              제2018-서울종로-0426호 전화번호: 00-308-321-0058
            </div>
            <div>대표: 레지널드 숀 톰프슨</div>
            <div>이메일 주소: korea@netflix.com</div>
            <div>
              주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
              20층 우편번호 03161
            </div>
            <div>클라우드 호스팅: Amazon Web Services Inc.</div>
          </div>
        </MemberFooterCopyRight>
      </Footer>
    </Router>
  );
}

export default App;
