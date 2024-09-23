import Input from "@mui/material/Input";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const HeaderWrapper = styled.div(
  {},
  ({ flex, borderRight }) => `
  flex:${flex || "0 0 25%"};
  border-right: ${borderRight || "1px solid white"};
  `
);

export const Header = styled.div`
  background: #83217fe0;
  width: 100%;
  height: 8vh;
  font-size: 16px;
  font-weight: 600;
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px;
  align-items: center;

  & > :last-child {
    margin-left: auto;
  }
`;

export const SideBarContainer = styled.div`
  background: #3d0c3be0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 92vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const SideBarContent = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: center;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`;

export const MessageWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  width: 260px;
`;

export const MessageCount = styled.p`
  display: flex;
  background: pink;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
  color: #3d0c3be0;
  align-items: center;
  justify-content: center;
`;

export const ChatHeaderContent = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px;
`;

export const StatusText = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  margin-top: -6px;
`;

export const ChatFooter = styled.div`
  background: #83217fe0;
  height: 10%;
  margin-top: auto;
`;
export const ChatFooterContent = styled.div`
  display: flex;
  padding: 10px;
  gap: 18px;
  align-items: center;
`;

export const InputBox = styled(Input)`
  width: 90%;
  color: #3d0c3be0;
  background: #fff;
  border: 1px solid #3d0c3be0;
  &:focus {
    border: 1px solid #3d0c3be0;
  }
`;

export const MessageContainer = styled.div(
  {},
  ({ bg, left, right, float, top }) => `
  background: ${bg || " #83217fe0"};
  width: 42%;
  padding: 10px;
  word-wrap: break-word;
  border-radius: 10px;
  top:${top};
  position: relative;
  left: ${left};
  float:${float || "left"};
  right:${right};
  color:#fff;
`
);

export const Messagetext = styled.p``;
