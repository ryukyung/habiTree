import styled from 'styled-components';
import common from '../styles/common';
import { useState } from 'react';

export default function HabitDetail({ img, title, startDate, endDate }) {
  const imgPath = `/src/assets/png/tree${img}.png`;
  const [value, setValue] = useState(false);
  const clickTree = () => {
    console.log('clickTree');
    setValue(!true);
  };
  return (
    <HabitDetailCover>
      <HabitTree>
        <img src={imgPath} onClick={clickTree} />
      </HabitTree>
      <HabitContent>
        <span className="title">{title}</span>
        <span>
          {startDate} ~ {endDate}
        </span>
      </HabitContent>
    </HabitDetailCover>
  );
}

const HabitDetailCover = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${common.fontFamily.defaultFont};
`;
const HabitTree = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${common.color.gray};
  img {
    width: 200px;
    height: 200px;
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const HabitContent = styled.div`
  width: calc(100% - 20px);
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .title {
    font-size: 24px;
    margin-bottom: 4px;
  }
`;
