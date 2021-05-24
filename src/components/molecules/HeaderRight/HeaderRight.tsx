import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { CloseOutlined } from '@ant-design/icons';
import {
  CustomRiArrowDropDownFill,
  DropdownContentWrapper,
  HeaderRightWrapper,
  NavElement,
  SearchInput,
  SearchWrapper,
  SecondaryNavigation,
  ToggleWrapper,
} from './style';
import { Dropdown, Menu, Switch as Switcher } from 'antd';
import { GoSettings } from 'react-icons/go';
import SearchModal from '../SearchModal';

function HeaderRight(): JSX.Element {
  const MenuStyle = useMemo(() => ({ padding: 20, width: 300, marginTop: 20 }), []);
  const BgStyle = useMemo(() => ({ background: 'white' }), []);
  const SpanStyle = useMemo(() => ({ marginRight: 10 }), []);

  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [onswitch, onsetSwitch] = useState(false);

  const [showOutButton, setShowOutButton] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // 이런식으로 주는 게 아닌 것 같은데 구현은 되었습니다,,
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  });

  const onClickSwitch = useCallback(() => {
    onsetSwitch((prev) => !prev);
  }, []);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowOutButton(true);
    setShowSearchModal(true);
  };

  const onClickFocus = useCallback(() => {
    setFocus((prev) => !prev);
  }, []);

  const removeFocus = useCallback(() => {
    setFocus(false);
    setShowSearchModal(false);
    setShowOutButton(false);
    setValue('');
  }, []);

  // useEffect(() => {
  //   console.log('focus 상태 확인', focus);
  // }, [focus]);

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
            <FaSearch style={{ marginLeft: 5 }} />
            {focus && (
              <>
                <SearchInput
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  placeholder="제목, 사람, 장르"
                  value={value}
                  onChange={onChangeInput}
                  ref={inputRef}
                />
                {showOutButton && <CloseOutlined style={{ marginRight: 5 }} />}
                {/* onClick={removeFocus} */}
              </>
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
      {showSearchModal && <SearchModal />}
    </HeaderRightWrapper>
  );
}

export default HeaderRight;
