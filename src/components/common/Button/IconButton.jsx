import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import common from '../../../styles/common';
import Prev from '../../../assets/svg/arrow-left.svg';
import Next from '../../../assets/svg/arrow-right.svg';

export default function IconButton({ isPrev }) {
  const id = 123;
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
        <Link to={`/habit/${id}`} className="link">
          <ReactSVG src={Next} className="next" onClick={() => nextPage()} />
        </Link>
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
    margin-top: -5px;
  }
  .next {
    color: ${common.color.gray};
  }
`;
