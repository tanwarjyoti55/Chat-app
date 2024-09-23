import React from "react";
import { Container } from "./style";
import SideBar from "./sideBar";
import ChatBox from "./ChatBox";

const ChatArea = () => {
  return (
    <>
      <Container>
        <SideBar />
        <ChatBox />
      </Container>
    </>
  );
};

export default ChatArea;
