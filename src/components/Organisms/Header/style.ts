import styled from '@emotion/styled';

export const PinningHeader = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: transparent;

  & .black {
    width: 100%;
    position: fixed;
    transition: ease-in-out;
    transition-duration: 0.6s;
    background-color: black;
  }
`;

export const PinningHeaderContainer = styled.div`
  left: 0;
  right: 0;
  z-index: 1;
`;

export const MainHeader = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  padding-left: 4%;
  padding-right: 4%;
`;
