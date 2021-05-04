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
