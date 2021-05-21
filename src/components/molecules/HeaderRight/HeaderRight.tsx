import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import {
  CustomRiArrowDropDownFill,
  DropdownContentWrapper,
  HeaderRightWrapper,
  NavElement,
  SearchForm,
  SearchInput,
  SearchWrapper,
  SecondaryNavigation,
  ToggleWrapper,
} from './style';
import { Dropdown, Menu, Switch as Switcher } from 'antd';
import { GoSettings } from 'react-icons/go';

function HeaderRight(): JSX.Element {
  const MenuStyle = useMemo(() => ({ padding: 20, width: 300, marginTop: 20 }), []);
  const BgStyle = useMemo(() => ({ background: 'white' }), []);
  const SpanStyle = useMemo(() => ({ marginRight: 10 }), []);

  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [onswitch, onsetSwitch] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  inputRef.current?.focus();

  useEffect(() => {
    console.log('ref 상태 감지', inputRef);
  });

  const onClickSwitch = useCallback(() => {
    onsetSwitch((prev) => !prev);
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickFocus = useCallback(() => {
    setFocus((prev) => !prev);
  }, []);

  const removeFocus = useCallback(() => {
    setFocus(false);
    setValue('');
  }, []);

  useEffect(() => {
    console.log('focus 상태:', focus);
  }, [focus]);

  const menu = (
    <Menu style={MenuStyle}>
      <Menu.Item key="0" style={BgStyle}>
        <span style={SpanStyle}>작품 상세 정보</span>
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
          <SearchWrapper onClick={onClickFocus} onBlur={removeFocus} className={focus ? 'search-focused' : ''}>
            {/* button */}
            <FaSearch />
            {focus && (
              // form
              <SearchForm>
                {/* input */}
                <SearchInput
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  placeholder="제목, 사람, 장르"
                  value={value}
                  onChange={onChangeInput}
                  // 클릭시 focus를 주기 위한 inputRef
                  ref={inputRef}
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
                <CustomRiArrowDropDownFill style={{ marginLeft: 2 }} />
              </span>
            </DropdownContentWrapper>
          </Dropdown>
        </NavElement>
      </SecondaryNavigation>
    </HeaderRightWrapper>
  );
}

export default HeaderRight;
