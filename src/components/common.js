import styled from "styled-components";

const NoticeBox = styled.div`
  padding: 20px;
  color: white;
  margin-bottom: 15px;
`;

export const WarningNotice = styled(NoticeBox)`
  background-color: #ff9800;
`;

export const SuccessNotice = styled(NoticeBox)`
  background-color: #4caf50;
`;

export const ErrorNotice = styled(NoticeBox)`
  background-color: #f44336;
`;

export const AvatarImage = styled.img`
  width: 100px;
  border-radius: 50%;
`;
