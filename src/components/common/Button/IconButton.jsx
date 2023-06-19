import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import common from '../../../styles/common';
import Prev from '../../../assets/svg/arrow-left.svg';
import Next from '../../../assets/svg/arrow-right.svg';

export default function IconButton({ isPrev }) {
  const prevPage = () => {
    console.log('이전 페이지로 감');
  };
  const nextPage = () => {
    console.log('다음 페이지로 감');
  };
  return (
    <IconButtonStyled>
      {isPrev === true ? (
        <ReactSVG src={Prev} className="prev" onClick={() => prevPage()} />
      ) : (
        <ReactSVG src={Next} className="next" onClick={() => nextPage()} />
      )}
    </IconButtonStyled>
  );
}
const IconButtonStyled = styled.div`
  width: 24px;
  height: 24px;
  .prev,
  .next {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .prev {
    color: ${common.color.white};
  }
  .next {
    color: ${common.color.gray};
  }
`;
