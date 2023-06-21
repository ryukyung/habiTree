import styled from 'styled-components';
import common from '../styles/common';
import IconButton from './common/Button/IconButton';

export default function Habit({ img, title, percent, startDate, endDate }) {
  const imgPath = `/src/assets/png/tree${img}.png`;
  return (
    <HabitCover>
      <img src={imgPath} />
      <HabitContent>
        <div>
          <span className="title">{title}</span>
          <span className="percent">{percent}%</span>
        </div>
        <span className="during">
          {startDate} ~ {endDate}
        </span>
      </HabitContent>
      <IconButton />
    </HabitCover>
  );
}

const HabitCover = styled.div`
  width: 330px;
  height: 95px;
  margin: 12px;
  display: flex;
  align-items: center;
  font-family: ${common.fontFamily.defaultFont};
  border-bottom: 1px solid ${common.color.gray};
  img {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const HabitContent = styled.div`
  width: 160px;
  height: 38px;
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .percent,
  .during {
    font-size: 14px;
  }
  margin-left: 12px;
  margin-right: 56px;
`;
