import { FC, memo } from 'react';
import styled from '@emotion/styled';

import { ButtonAlign } from '.';

interface Props {
  name: string;
  align?: ButtonAlign;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

interface StyledProps {
  align: ButtonAlign | undefined;
}

export const StyledButton = styled.button<StyledProps>`
  float: ${({ align }) => align};
  background-color: ${({ theme }) => theme.PRIMARY_COLOR};
  color: ${({ theme }) => theme.DARK_BACKGROUND_GREY};
  border: none;
  font-size: 24px;
  font-weight: bold;
  border-radius: 4px;
  padding: 4px 16px;

  cursor: pointer;
  transition: filter 0.5s;
  /* &:hover {
    filter: brightness(1.3);
  } */
  &:focus {
    outline: none;
  }
`;

const Button: FC<Props> = ({ name, align, onClick, type }) => (
  <StyledButton align={align} onClick={onClick} type={type}>
    {name}
  </StyledButton>
);

Button.defaultProps = {
  align: 'none',
  type: 'button',
};

export default memo(Button);
