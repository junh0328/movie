import React from 'react';
import { Link } from 'react-router-dom';
import neflix_logo from '@/images/neflix_logo.png';
import { HeaderLeftWrapper } from './style';

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
