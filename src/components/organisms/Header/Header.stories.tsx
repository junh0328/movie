import React from 'react';
import Header from './Header';
import 'antd/dist/antd.css';

const desc = {
  component: Header,
  title: 'Organisms/Header',
};

export const Default = (): JSX.Element => {
  return <Header />;
};

export default desc;
