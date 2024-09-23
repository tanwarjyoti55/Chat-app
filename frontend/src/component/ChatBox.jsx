import React from "react";
import {
  ChatFooter,
  ChatFooterContent,
  ChatHeaderContent,
  Header,
  HeaderWrapper,
  InputBox,
  StatusText,
  TextWrap,
} from "./style";
import Avatar from "@mui/material/Avatar";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// import { Avatar, Button, Input } from "@chakra-ui/react";
// import { AttachmentIcon } from "@chakra-ui/icons";
import Message from "./Message";
import { Button } from "@mui/material";

const ChatBox = () => {
  return (
    <>
      <HeaderWrapper flex="0 0 75%" borderRight="none" className="chat-box">
        <Header>
          <ChatHeaderContent>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <TextWrap>
              <h2>Dan Abrahmov</h2>
              <StatusText>online</StatusText>
            </TextWrap>
            {/* <div></div> */}
          </ChatHeaderContent>
        </Header>

        <Message />

        <ChatFooter>
          <ChatFooterContent>
            <AttachFileIcon m={"0 0 0 10px"} w={5} h={5} />
            <InputBox placeholder="write a message" size="md" />
            <Button colorScheme="blue">Send</Button>
          </ChatFooterContent>
        </ChatFooter>
      </HeaderWrapper>
    </>
  );
};

export default ChatBox;
