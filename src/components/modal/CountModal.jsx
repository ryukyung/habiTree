import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import common from '../../styles/common';
import BoxButton from '../common/Button/BoxButton';
import noSave from '../../assets/svg/no-save.svg';

export default function CountModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CountModalCover>
      <BoxButton
        content={'등록하기'}
        width={'189px'}
        color={common.color.gray}
        modalHandler={openModalHandler}
      />
      {isOpen ? (
        <ModalContent>
          <CountContentStyled onClick={(e) => e.stopPropagation()}>
            <ReactSVG src={noSave} />
            <div className="text-content">
              <span className="title">앗 이런!</span>
              <br />
              <span>습관은 최대 5개까지 만들 수 있어요.</span>
              <br />
              <span>오류코드: LESS THAN 5 HABITS</span>
              <br />
            </div>
            <BoxButton content={'확인'} modalHandler={openModalHandler} />
          </CountContentStyled>
        </ModalContent>
      ) : null}
    </CountModalCover>
  );
}

const CountModalCover = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: ${common.color.opacity};
  width: 414px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50;
  right: 50;
  bottom: 0;
`;

const CountContentStyled = styled.div`
  width: 318px;
  height: 197px;
  padding-left: 28px;
  padding-top: 12px;
  border-radius: 12px;
  font-family: ${common.fontFamily.defaultFont};
  background-color: ${common.color.white};
  .text-content {
    margin-top: 4px;
    margin-bottom: 32px;
    font-size: 12px;
  }
  .title {
    font-size: 30px;
  }
`;
