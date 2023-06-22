import { Link } from 'react-router-dom';
import styled from 'styled-components';
import common from '../styles/common';
import TextButton from '../components/common/Button/TextButton';

export default function Main() {
  const clickHandler = () => {
    console.log('go habitList');
  };
  return (
    <Wrapper>
      <span>habiTree</span>
      <img src="/src/assets/png/tree4.png" />
      <Link to="/habit" className="link">
        <button className="button" onClick={clickHandler}>
          바로가기
        </button>
      </Link>
      <a href="https://ryukyung.notion.site/habiTree-2787e95952f644c99759a742c1dc8b46?pvs=4">
        <TextButton content={' habiTree'} isSvg={true} />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  span {
    font-family: ${common.fontFamily.logo};
    font-size: 70px;
  }
  img {
    width: 300px;
    height: 300px;
  }
  .link {
    text-decoration: none;
  }
  .button {
    all: unset;
    width: 240px;
    height: 30px;
    border-radius: 4px;
    color: ${common.color.gray};
    background-color: ${common.color.green};
    font-family: ${common.fontFamily.defaultFont};
    cursor: pointer;
  }
`;
