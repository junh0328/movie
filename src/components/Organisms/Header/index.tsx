import {
  MainHeader,
  PinningHeader,
  PinningHeaderContainer,
  SecondaryNavigation,
} from "./style";
import { Dropdown, Menu, Switch as Switcher } from "antd";
import { BsFillBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import neflix_logo from "@/images/neflix_logo.png";
import useHandleScroll from "@/hooks/useHandleScroll";

function Header(): JSX.Element {
  const { scrolling } = useHandleScroll();

  const menu = (
    <Menu style={{ padding: 20, wordBreak: "break-word" }}>
      <Menu.Item key="0" style={{ wordBreak: "inherit", width: "250px" }}>
        <span style={{ marginRight: 10, marginBottom: 10 }}>
          작품 상세 정보
        </span>
        <Switcher
          onClick={() => {
            alert("토글 설정!");
          }}
        />
        <div>임시 토글</div>
      </Menu.Item>
    </Menu>
  );

  return (
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
              <div
                onClick={() => {
                  alert("검색");
                }}
              >
                <FaSearch />
              </div>
              <div
                onClick={() => {
                  alert("키즈");
                }}
              >
                키즈
              </div>
              <div
                onClick={() => {
                  alert("알람");
                }}
              >
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
  );
}

export default Header;
