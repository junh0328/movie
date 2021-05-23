import styled from '@emotion/styled';

export const ModalWrap = styled.div`
  background-color: #181818;
  color: white;
  height: 80%;
  width: 80%;
  top: 10%;
  z-index: 10;
  left: 10%;
  position: fixed;
  border-radius: 10px;
  padding: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PlayButton = styled.button`
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
  color: black;
  & svg {
    vertical-align: middle;
    margin-right: 5px;
    font-size: 20px;
  }
  margin-bottom: 30px;
`;

export const ModalImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  position: absolute;
  z-index: -1;
  margin: -20px;
`;

export const ModalTitle = styled.h1`
  color: white;
  padding-top: 35%;
`;

export const ModalBar = styled.div`
  background-color: white;
  height: 2px;
  opacity: 0.6;
  width: 40%;
  z-index: -2;
`;

export const ModalInfoWrapper = styled.div`
  display: flex;
  & section {
    font-weight: 700;
    width: 60%;
    margin-right: 20px;
    & div {
      margin-bottom: 15px;
    }
  }
  & aside {
    width: 30%;
  }
`;
