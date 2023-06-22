import styled from 'styled-components';
import common from '../styles/common';
import Header from '../components/common/Header';
import HabitDetail from '../components/HabitDetail';
import Stamp from '../components/Stamp';

export default function Detail() {
  return (
    <Wrapper>
      <Header isDetail={true} />
      <HabitDetail
        img={1}
        title={'영양제 먹기'}
        percent={'20'}
        startDate={'2023.06.01'}
        endDate={'2023.06.30'}
      />
      <StampCover>
        <Stamp date={'6/1'} isSuccess={true} />
        <Stamp date={'6/2'} isSuccess={true} />
        <Stamp date={'6/3'} isSuccess={true} />
        <Stamp date={'6/4'} />
        <Stamp date={'6/5'} />
        <Stamp date={'6/6'} />
        <Stamp date={'6/7'} />
        <Stamp date={'6/8'} isSuccess={true} />
        <Stamp date={'6/9'} isSuccess={true} />
      </StampCover>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StampCover = styled.div`
  width: calc(100% - 20px);
  margin-top: 24px;
  margin-left: 20px;
  flex-wrap: wrap;
  display: flex;
  row-gap: 20px;
  column-gap: 12px;
`;
