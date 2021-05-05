import React from "react";
import {
  BillboardWrap,
  InfoTitleWrapper,
  InfoMetaLayer,
  InfoWrapper,
  LogoAndTextMetaLayer,
  MainWrapper,
} from "./style";
import spiderman from "../images/spiderman.png";
import logoTitle from "../images/logoTitle.png";
import { BiInfoCircle } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";

function Home() {
  return (
    <>
      <BillboardWrap>
        <img src={spiderman} alt="spiderman" />
        <InfoMetaLayer>
          <LogoAndTextMetaLayer>
            <InfoTitleWrapper>
              <img src={logoTitle} alt="spidermanLogo" />
            </InfoTitleWrapper>
            <InfoWrapper>
              유럽 여행에서 사랑을 고백하려 한 피터 파커. 근데 맙소사, 새로운
              악당의 출현이라니, 게다가 닉 퓨리가 찾아와 도움을 청하네. 이렇게
              된 이상 또 다시 세상을 구할 수밖에.
            </InfoWrapper>
            <button>
              <AiFillCaretRight />
              재생
            </button>
            <button>
              <BiInfoCircle />
              상세 정보
            </button>
          </LogoAndTextMetaLayer>
        </InfoMetaLayer>
      </BillboardWrap>
      <MainWrapper>안녕하세요</MainWrapper>
    </>
  );
}

export default Home;
