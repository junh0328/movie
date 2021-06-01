import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { AiFillCaretRight } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';

import { ButtonAlign } from '.';

interface ButtonProps {
  name: string;
  align?: ButtonAlign;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

interface StyledProps {
  align: ButtonAlign | undefined;
}

export const StyledButton = styled.button<StyledProps>`
  z-index: 10000;
  cursor: pointer;
  font-weight: bolder;
  border: none;
  border-radius: 4px;
  text-align: center;
  width: 120px;
  height: 40px;
  font-size: 15px;
  margin-top: 1.5vw;
  & svg {
    vertical-align: middle;
    margin-right: 5px;
    font-size: 20px;
  }
`;

const Button: FC<ButtonProps> = ({ name, align, onClick, type }) => (
  <StyledButton align={align} onClick={onClick} type={type}>
    {name === '재생' ? <AiFillCaretRight /> : <BiInfoCircle />}
    {name}
  </StyledButton>
);

Button.defaultProps = {
  align: 'none',
  type: 'button',
};

export default memo(Button);
