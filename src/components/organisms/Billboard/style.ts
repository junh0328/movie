import styled from '@emotion/styled';

interface StyledProps {
  logo: boolean;
}

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
  margin-bottom: 3%;
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
  width: 50%;
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

  & button:last-child {
    margin-left: 15px;
    background-color: #6d6d6eb3;
    color: white;
  }

  /* @media (max-width: 720px) {
    & button:last-child {
      margin-top: 15px;
      margin-left: 0;
    }
  } */
`;

export const InfoTitleWrapper = styled.div<StyledProps>`
  transform-origin: left bottom;
  transform: ${({ logo }) =>
    logo ? 'scale(0.6) translate3d(0px, 100px, 0px) ' : 'scale(1) translate3d(0px, 0px, 0px)'};
  transition-duration: 1300ms;
  transition-delay: ${({ logo }) => (logo ? '5000ms ' : '0ms')};

  & img {
    min-height: 13.2vw;
    position: relative;
    margin-bottom: 1.2vw;
    width: 450px;
    height: 300px;
  }
`;

export const InfoWrapper = styled.div`
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 1300ms;
  transition-delay: 0ms;
  opacity: 1;
  color: white;
`;

export const InfoWrapperfade = styled.div<StyledProps>`
  opacity: ${({ logo }) => (logo ? 0 : 1)};
  transition-duration: 600ms;
  transition-delay: 5000ms;
`;
