import { useState } from 'react';
import styled from 'styled-components';
import common from '../../styles/common';
import TextButton from '../common/Button/TextButton';
import BoxButton from '../common/Button/BoxButton';

export default function DeleteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DeleteModalCover>
      <TextButton
        content={'삭제'}
        color={common.color.white}
        modalHandler={openModalHandler}
      />
      {isOpen ? (
        <ModalContent>
          <DeleteContentStyled onClick={(e) => e.stopPropagation()}>
            <span>정말 삭제하겠습니까?</span>
            <div className="box-cover">
              <BoxButton
                content={'취소'}
                color={common.color.white}
                modalHandler={openModalHandler}
              />
              <BoxButton content={'확인'} modalHandler={openModalHandler} />
            </div>
          </DeleteContentStyled>
        </ModalContent>
      ) : null}
    </DeleteModalCover>
  );
}

const DeleteModalCover = styled.div`
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

const DeleteContentStyled = styled.div`
  background-color: ${common.color.white};
  width: 280px;
  height: 160px;
  font-size: 30px;
  font-family: ${common.fontFamily.defaultFont};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-direction: column;
  .box-cover {
    width: 116px;
    display: flex;
    justify-content: space-between;
  }
`;
