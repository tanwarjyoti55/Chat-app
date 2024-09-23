import React, { useEffect, useRef, useState } from "react";
import { Messagetext, MessageContainer } from "./style";

const Message = () => {
  // const heightRef = useRef(null);
  // const [height, setHeight] = useState(0);
  // console.log(heightRef, "heightRef");
  // useEffect(() => {
  //   if (heightRef.current) setHeight(heightRef.current.offsetHeight);
  // }, [heightRef]);
  return (
    <>
      <div>
        <div style={{ position: "relative", top: "20px" }}>
          <MessageContainer left="1%">
            <Messagetext>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator.
            </Messagetext>
          </MessageContainer>
        </div>
        <div style={{ position: "relative", top: "120px" }}>
          <MessageContainer
            float="right"
            right="1%"
            bg="#919193"
            // top={`${height + 20}px`}
          >
            <Messagetext>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator.
            </Messagetext>
          </MessageContainer>
        </div>
        <div style={{ position: "relative", top: "20px" }}>
          <MessageContainer left="1%">
            <Messagetext>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator.
            </Messagetext>
          </MessageContainer>
        </div>
        <div style={{ position: "relative", top: "120px" }}>
          <MessageContainer
            float="right"
            right="1%"
            bg="#919193"
            // top={`${height + 20}px`}
          >
            <Messagetext>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator.
            </Messagetext>
          </MessageContainer>
        </div>
        <div style={{ position: "relative", top: "20px" }}>
          <MessageContainer left="1%">
            <Messagetext>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator.
            </Messagetext>
          </MessageContainer>
        </div>
        <div style={{ position: "relative", top: "120px" }}>
          <MessageContainer
            float="right"
            right="1%"
            bg="#919193"
            // top={`${height + 20}px`}
          >
            <Messagetext>
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator. Reference site
              about Lorem Ipsum, giving information on its origins, as well as a
              random Lipsum generator.
            </Messagetext>
          </MessageContainer>
        </div>
      </div>
    </>
  );
};

export default Message;
