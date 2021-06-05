import styled from '@emotion/styled';

export const SearchModalWrapper = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 68px;
  right: 0;
  z-index: 10001;

  & div {
    /* margin-top: 200px; */
    display: inline-block;
    width: 100%;
    height: 100%;
    background: black;
    user-select: none;
    max-width: 100%;
    padding-top: 40px;
    position: relative;
    & h1 {
      color: white;
    }
  }
`;
