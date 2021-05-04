import React from "react";
import { BillboardWrap } from "./style";
import spiderman from "../images/spiderman.png";

function Home() {
  return (
    <BillboardWrap>
      <img src={spiderman} alt="spiderman" />
    </BillboardWrap>
  );
}

export default Home;
