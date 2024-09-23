import React from "react";
import {
  Header,
  HeaderContent,
  HeaderWrapper,
  Message,
  MessageCount,
  MessageWrap,
  Name,
  SideBarContainer,
  SideBarContent,
  TextWrap,
} from "./style";
import Avatar from "@mui/material/Avatar";
import { ThemeComponent } from "../ThemeComponent";

const SideBar = () => {
  return (
    <>
      <HeaderWrapper>
        <Header>
          <HeaderContent className="icon-shift">
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <h2>Dan Abrahmov</h2>
            <ThemeComponent />
          </HeaderContent>
        </Header>
        <SideBarContainer>
          <div class="set-border">
            <SideBarContent>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <TextWrap>
                <Name>Dan Abrahmov</Name>
                <MessageWrap>
                  <Message>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </Message>
                  <MessageCount>1</MessageCount>
                </MessageWrap>
              </TextWrap>
            </SideBarContent>
          </div>
          <div class="set-border">
            <SideBarContent>
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <TextWrap>
                <Name>Dan Abrahmov</Name>
                <MessageWrap>
                  <Message>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </Message>
                  <MessageCount>1</MessageCount>
                </MessageWrap>
              </TextWrap>
            </SideBarContent>
          </div>
          <div class="set-border">
            <SideBarContent>
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <TextWrap>
                <Name>Dan Abrahmov</Name>
                <MessageWrap>
                  <Message>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </Message>
                  <MessageCount>1</MessageCount>
                </MessageWrap>
              </TextWrap>
            </SideBarContent>
          </div>
        </SideBarContainer>
      </HeaderWrapper>
    </>
  );
};

export default SideBar;
