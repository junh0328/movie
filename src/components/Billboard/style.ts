import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const BillboardWrap = styled.div`
  position: relative;
  color: black;

  & img {
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    opacity: 1;
    -webkit-transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
    -o-transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
    -moz-transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
    transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
  }
`;

export const InfoMetaLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 15%;
  left: 4%;
  width: 36%;
  z-index: 10;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const LogoAndTextMetaLayer = styled.div`
  width: 100%;
  display: block;

  & button {
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
  }
  & button:last-child {
    margin-left: 15px;
    background-color: #6d6d6eb3;
    color: white;
  }
`;

export const InfoTitleWrapper = styled.div`
  transform-origin: left bottom;
  transform: scale(1) translate3d(0px, 0px, 0px);
  transition-duration: 1300ms;
  transition-delay: 0ms;
  & img {
    min-height: 13.2vw;
    position: relative;
    margin-bottom: 1.2vw;
  }
`;

export const InfoWrapper = styled.div`
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 1300ms;
  transition-delay: 0ms;
  opacity: 1;
  color: white;
`;
