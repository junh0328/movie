import React from 'react';
import { Link } from 'react-router-dom';
import neflix_logo from '@/images/neflix_logo.png';
import { CustomMenu, CustomMenuItem, HeaderLeftWrapper } from './style';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import useHandleWidth from '@/hooks/useHandleWidth';

// index.tsx 또는 App.tsx 에서 적용한 부분을 다시 적용해야하는 부분들이 있음
// Router 는 App.tsx에서 선언해주었지만, 스토리북에 적용하기 위해서는 다시 Router로 감싸 줘야함

function HeaderLeft() {
  const { dropDownView } = useHandleWidth();

  const menu = (
    <CustomMenu>
      <CustomMenuItem>
        <Link to="/">홈</Link>
      </CustomMenuItem>
      <CustomMenuItem>
        <Link to="/slider">TV 프로그램</Link>
      </CustomMenuItem>
      <CustomMenuItem>
        <Link to="/users">영화</Link>
      </CustomMenuItem>
      <CustomMenuItem>
        <Link to="/about">최신</Link>
      </CustomMenuItem>
    </CustomMenu>
  );

  return (
    <HeaderLeftWrapper>
      <a href="/">
        <img src={neflix_logo} alt="netflix_logo" />
      </a>
      {dropDownView ? (
        <div>
          <Dropdown overlay={menu}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <span className="ant-dropdown-link" onClick={(e) => e.preventDefault()} style={{ marginRight: 10 }}>
                메뉴
              </span>
              <span>
                <CaretDownOutlined />
              </span>
            </div>
          </Dropdown>
        </div>
      ) : (
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/slider">TV 프로그램</Link>
          </li>
          <li>
            <Link to="/users">영화</Link>
          </li>
          <li>
            <Link to="/about">NEW! 요즘 대세 콘텐츠</Link>
          </li>
        </ul>
      )}
    </HeaderLeftWrapper>
  );
}

export default HeaderLeft;
