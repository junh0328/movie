import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Button = styled.button<{ direction: 'next' | 'prev' }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 55px;
  background: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: 0;
  padding: 0;
  margin: 40px 0;
  z-index: 4;
  ${(props) =>
    props.direction === 'prev' &&
    css`
      left: 0;
    `}

  ${(props) =>
    props.direction === 'next' &&
    css`
      right: 0;
    `}

  span {
    width: 25px;
    color: #fff;
    display: block;
    margin: 0 auto;
  }
`;

type Props = {
  direction: 'next' | 'prev';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function ControlButton(props: Props) {
  const { direction, ...restProps } = props;

  return (
    <Button {...restProps} direction={direction}>
      <span>{direction === 'next' ? '>' : '<'}</span>
    </Button>
  );
}

export default ControlButton;
