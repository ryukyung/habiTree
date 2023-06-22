import styled from 'styled-components';
import common from '../styles/common';
export default function Stamp({ date, isSuccess }) {
  return (
    <StampCover>
      <span>{date}</span>
      {isSuccess ? (
        <img src="/src/assets/png/green-stamp.png" />
      ) : (
        <img src="/src/assets/png/gray-stamp.png" />
      )}
    </StampCover>
  );
}

const StampCover = styled.div`
  width: 45px;
  height: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: ${common.fontFamily.defaultFont};
  font-size: 8px;
  img {
    width: 35px;
    height: 35px;
  }
`;
