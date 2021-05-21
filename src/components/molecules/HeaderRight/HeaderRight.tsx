import React, { useCallback, useEffect, useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import {
  DropdownContentWrapper,
  HeaderRightWrapper,
  NavElement,
  SearchForm,
  SearchInput,
  SearchLabel,
  SearchWrapper,
  SecondaryNavigation,
  ToggleWrapper,
} from './style';
import { Dropdown, Menu, Switch as Switcher } from 'antd';
import { GoSettings } from 'react-icons/go';
import { RiArrowDropDownFill } from 'react-icons/ri';

function HeaderRight(): JSX.Element {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [onswitch, onsetSwitch] = useState(false);

  const onClickSwitch = useCallback(() => {
    onsetSwitch((prev) => !prev);
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickFocus = useCallback(() => {
    setFocus((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log('focus 상태:', focus);
  }, [focus]);

  const menu = (
    <Menu style={{ padding: 20, width: 300 }}>
      <Menu.Item key="0">
        <span style={{ marginRight: 20 }}>작품 상세 정보</span>
        <Switcher onClick={onClickSwitch} />
        {onswitch ? (
          <ToggleWrapper>줄거리, 길이, 공개연도가 표시됩니다</ToggleWrapper>
        ) : (
          <ToggleWrapper>줄거리, 길이, 공개연도가 표시되지 않습니다</ToggleWrapper>
        )}
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderRightWrapper>
      <SecondaryNavigation>
        <NavElement>
          <SearchWrapper onClick={onClickFocus} className={focus ? 'search-focused' : ''}>
            {/* button */}
            <FaSearch />
            {focus && (
              // form
              <SearchForm>
                {/* legend */}
                <legend>검색</legend>
                {/* label */}
                <SearchLabel></SearchLabel>
                {/* input */}
                <SearchInput
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  placeholder="제목, 사람, 장르"
                  value={value}
                  onChange={onChangeInput}
                />
              </SearchForm>
            )}
          </SearchWrapper>
        </NavElement>
        <NavElement
          onClick={() => {
            alert('키즈');
          }}
        >
          키즈
        </NavElement>
        <NavElement
          onClick={() => {
            alert('알람');
          }}
        >
          <BsFillBellFill />
        </NavElement>
        <NavElement>
          <Dropdown overlay={menu}>
            <DropdownContentWrapper>
              <span className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <GoSettings style={{ marginRight: 2 }} />
                <RiArrowDropDownFill style={{ marginLeft: 2 }} />
              </span>
            </DropdownContentWrapper>
          </Dropdown>
        </NavElement>
      </SecondaryNavigation>
    </HeaderRightWrapper>
  );
}

export default HeaderRight;
