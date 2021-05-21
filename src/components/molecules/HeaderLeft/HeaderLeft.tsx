import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import neflix_logo from '@/images/neflix_logo.png';
import { HeaderLeftWrapper } from './style';

// index.tsx 또는 App.tsx 에서 적용한 부분을 다시 적용해야하는 부분들이 있음
// Router 는 App.tsx에서 선언해주었지만, 스토리북에 적용하기 위해서는 다시 Router로 감싸 줘야함

function HeaderLeft(): JSX.Element {
  return (
    <HeaderLeftWrapper>
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
    </HeaderLeftWrapper>
  );
}

export default HeaderLeft;
