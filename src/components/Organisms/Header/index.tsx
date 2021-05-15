import {
  MainHeader,
  NavElement,
  PinningHeader,
  PinningHeaderContainer,
  SecondaryNavigation,
  ToggleWrapper,
} from "./style";
import { Dropdown, Menu, Switch as Switcher } from "antd";
import { BsFillBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { RiArrowDropDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import neflix_logo from "@/images/neflix_logo.png";
import useHandleScroll from "@/hooks/useHandleScroll";
import { useCallback, useEffect, useState } from "react";

function Header(): JSX.Element {
  const { scrolling } = useHandleScroll();
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [onswitch, onsetSwitch] = useState(false);

  const onClickSwitch = useCallback(() => {
    onsetSwitch((prev) => !prev);
  }, []);

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  const onClickFocus = useCallback(() => {
    setFocus((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log("focus 상태:", focus);
  }, [focus]);

  /*
  const onCloseSearch = useCallback(() => {
    console.log("focus 상태:", focus);
    setFocus(false);
  }, []);
  */

  const menu = (
    <Menu style={{ padding: 20, wordBreak: "keep-all" }}>
      <Menu.Item
        key="0"
        style={{ wordBreak: "keep-all", width: "200px", height: "auto" }}
      >
        <span
          style={{ marginRight: 10, marginBottom: 10, wordBreak: "keep-all" }}
        >
          작품 상세 정보
        </span>
        <Switcher onClick={onClickSwitch} />
        {onswitch ? (
          <ToggleWrapper>줄거리, 길이, 공개연도가 표시됩니다</ToggleWrapper>
        ) : (
          <ToggleWrapper>
            줄거리, 길이, 공개연도가 표시되지 않습니다
          </ToggleWrapper>
        )}
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
            <NavElement
              onClick={onClickFocus}
              className={focus ? "search-focused" : ""}
            >
              <FaSearch />
              {focus && (
                <form>
                  <input
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    placeholder="제목, 사람, 장르"
                    value={value}
                    onChange={onChangeInput}
                  />
                </form>
              )}
            </NavElement>
            <NavElement
              onClick={() => {
                alert("키즈");
              }}
            >
              키즈
            </NavElement>
            <NavElement
              onClick={() => {
                alert("알람");
              }}
            >
              <BsFillBellFill />
            </NavElement>
            <NavElement>
              <Dropdown overlay={menu}>
                <span
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <GoSettings style={{ marginRight: 2 }} />
                  <RiArrowDropDownFill style={{ marginLeft: 2 }} />
                </span>
              </Dropdown>
            </NavElement>
          </SecondaryNavigation>
        </MainHeader>
      </PinningHeaderContainer>
    </PinningHeader>
  );
}

export default Header;
