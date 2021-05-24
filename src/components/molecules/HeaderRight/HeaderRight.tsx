import React, { useCallback, useEffect, useState, useRef, useMemo, FC } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { CloseOutlined, GithubOutlined } from '@ant-design/icons';
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
// import SearchModal from '../SearchModal';
import { API_KEY, BASE_URL } from '@/apis';
import axios from 'axios';
import { SearchModalWrapper } from '../SearchModal/style';
import { QueryType } from '@/types/common';

const HeaderRight: FC = () => {
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

  // searchAPI 사용 부분
  const [fetchedData, setFetchedData] = useState<QueryType[]>([]);

  // fetching search query
  const SearchQuery = (query: any) =>
    `${BASE_URL}/search/movie?api_key=${API_KEY}&sort_by=&query=${query}&language=en-US&page=1`;

  let datas = [];

  const fetch = async (query: any) => {
    try {
      const response = await axios.get(SearchQuery(query));
      datas = response.data.results;
      // console.log('검색된 data 출력!', datas);
      setFetchedData(datas);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // console.log(e.target.value);
    // console.log(e.target.value.length);
    setShowOutButton(true);
    setShowSearchModal(true);
    if (e.target.value.length > 1) {
      // console.log('fetch 시작!');
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
      {showSearchModal && (
        <SearchModalWrapper>
          {fetchedData && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {fetchedData.map((f) => (
                <ul key={f.id} style={{ listStyle: 'none', paddingLeft: 0, marginTop: 0 }}>
                  <li key={f.id}>
                    <div style={{ width: 310, marginRight: 5 }}>
                      {f.backdrop_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/original/${f.backdrop_path}`}
                          alt={f.original_title}
                          style={{ width: 300 }}
                        />
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '168.750px',
                            fontSize: '8rem',
                            paddingTop: 0,
                            color: 'salmon',
                          }}
                        >
                          <GithubOutlined />
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </SearchModalWrapper>
      )}
    </HeaderRightWrapper>
  );
};

export default HeaderRight;
