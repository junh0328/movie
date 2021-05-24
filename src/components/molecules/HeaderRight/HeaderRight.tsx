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
import axios from 'axios';
import { QueryType } from '@/types/common';
import { SearchQuery } from '@/apis';
import { SearchModalWrapper } from './style';

const HeaderRight: React.FC = () => {
  const MenuStyle = useMemo(() => ({ padding: 20, width: 300, marginTop: 20 }), []);
  const BgStyle = useMemo(() => ({ background: 'white' }), []);
  const SpanStyle = useMemo(() => ({ marginRight: 10 }), []);

  // input 값 관리
  const [value, setValue] = useState('');
  // input 태그 포커스 관리
  const [focus, setFocus] = useState(false);
  // 상세보기 버튼 값 관리
  const [onswitch, onsetSwitch] = useState(false);
  // 검색 api 값 관리
  const [fetchedData, setFetchedData] = useState<QueryType[]>([]);
  // input 버튼 내부의 x 버튼 관리
  const [showOutButton, setShowOutButton] = useState(false);
  // input 태그 내부에 값 입력시 켜지는 모달 상태 관리
  const [showSearchModal, setShowSearchModal] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  });

  const onClickSwitch = useCallback(() => {
    onsetSwitch((prev) => !prev);
  }, []);

  // search API 사용 부분
  let datas = [];
  const fetch = async (query: string) => {
    try {
      const response = await axios.get(SearchQuery(query));
      datas = response.data.results;
      setFetchedData(datas);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setShowOutButton(true);
    setShowSearchModal(true);
    // key event가 1개 이상 작성됐을 때부터 기능 실행
    if (e.target.value.length > 1) {
      fetch(value);
    }
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
      {/* search api를 모달을 통해 구현 */}
      {showSearchModal && (
        <SearchModalWrapper>
          {fetchedData && (
            <div style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '4%', paddingRight: '4%' }}>
              {fetchedData.map((f) => (
                <SearchModal key={f.id} data={f} />
              ))}
            </div>
          )}
        </SearchModalWrapper>
      )}
    </HeaderRightWrapper>
  );
};

export default HeaderRight;
