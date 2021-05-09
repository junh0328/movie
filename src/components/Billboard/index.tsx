import {
  BillboardWrap,
  InfoMetaLayer,
  InfoTitleWrapper,
  InfoWrapper,
  LogoAndTextMetaLayer,
} from "./style";
import spiderman from "@/images/spiderman.png";
import logoTitle from "@/images/logoTitle.png";
import { AiFillCaretRight } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";

// 후에 props를 바탕으로 재사용가능한 컴포넌트로 바꿔야 함

function Billboard() {
  return (
    <BillboardWrap>
      <img src={spiderman} alt="spiderman" />
      <InfoMetaLayer>
        <LogoAndTextMetaLayer>
          <InfoTitleWrapper>
            <img src={logoTitle} alt="spidermanLogo" />
          </InfoTitleWrapper>
          <InfoWrapper>
            유럽 여행에서 사랑을 고백하려 한 피터 파커. 근데 맙소사, 새로운
            악당의 출현이라니, 게다가 닉 퓨리가 찾아와 도움을 청하네. 이렇게 된
            이상 또 다시 세상을 구할 수밖에.
          </InfoWrapper>
          <button
            onClick={() => {
              alert("재생");
            }}
          >
            <AiFillCaretRight />
            재생
          </button>
          <button
            onClick={() => {
              alert("상세정보");
            }}
          >
            <BiInfoCircle />
            상세 정보
          </button>
        </LogoAndTextMetaLayer>
      </InfoMetaLayer>
    </BillboardWrap>
  );
}

export default Billboard;
