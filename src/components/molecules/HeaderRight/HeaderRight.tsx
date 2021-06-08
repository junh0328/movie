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
import { ContentDetail } from '@/types/common';
import { SearchQuery } from '@/apis';
import { SearchModalWrapper } from './style';
import usehandleOverFlow from '@/hooks/useHandleOverflow';
import _ from 'lodash';

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
  const [fetchedData, setFetchedData] = useState<ContentDetail[]>([]);
  // input 버튼 내부의 x 버튼 관리
  const [showOutButton, setShowOutButton] = useState(false);
  // input 태그 내부에 값 입력시 켜지는 모달 상태 관리
  const [showSearchModal, setShowSearchModal] = useState(false);
  // query 문의 page 수를 관리

  const { hidden, show } = usehandleOverFlow();

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
    if (query.length === 0) return;
    try {
      const response = await axios.get(SearchQuery(query));
      datas = response.data.results;
      setFetchedData(datas);
    } catch (error) {
      console.error(error);
    }
  };

  const delayedQueryCall = useRef(_.debounce((q) => fetch(q), 1000)).current;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    delayedQueryCall(e.target.value);
    setShowOutButton(true);
    setShowSearchModal(true);
    hidden();
    // key e가 1개 이상 작성됐을 때부터 기능 실행
    if (e.target.value.length) {
      fetch(value);
    } else {
      return;
    }
  };

  const onClickFocus = useCallback(() => {
    setFocus((prev) => !prev);
  }, []);

  // value (search 의 input) 값에 유무에 따른 ShowOutButton 상태 관리
  useEffect(() => {
    if (!value) {
      setShowOutButton(false);
      setShowSearchModal(false);
      show();
    }
  }, [value]);

  // x 버튼이 있다면 (value 값을 입력한 상황이라면) removeFocus 함수를 발동시키지 않고 싶어요
  const removeFocus = useCallback(() => {
    if (!showOutButton) {
      setFocus(false);
      setShowSearchModal(false);
      setValue('');
    }
  }, [showOutButton]);

  // x 버튼을 누르면 removeFocus와 같은 처리
  const onCloseModal = useCallback(() => {
    show();
    setShowSearchModal(false);
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
              <div style={{ width: '240px' }}>
                <SearchInput
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  placeholder="제목, 사람, 장르"
                  value={value}
                  onChange={onChangeInput}
                  ref={inputRef}
                />
                {showOutButton && <CloseOutlined onClick={onCloseModal} style={{ marginRight: 5 }} />}
              </div>
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
            <div
              style={{
                overflow: 'auto',
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                paddingLeft: '4%',
                paddingRight: '4%',
              }}
            >
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

// fetchedData가 있을 때, <body></body> 에다 overflow:hidden 속성을 줄 수 있나?
