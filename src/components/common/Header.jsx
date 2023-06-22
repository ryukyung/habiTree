import { useState } from 'react';
import styled from 'styled-components';
import common from '../../styles/common';
import IconButton from './Button/IconButton';
import TextButton from './Button/TextButton';
import Modal from './modal/index';

export default function Header({ isDetail, modalHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
    setCreateModalIsOpen(false);
    setLimitModalIsOpen(false);
  };
  return (
    <HeaderStyled isDetail={isDetail}>
      {isDetail && <IconButton isPrev={true} />}
      habiTree
      {isDetail && (
        <TextButton
          content={'삭제'}
          color={common.color.white}
          modalHandler={openModalHandler}
        />
      )}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleClose={handleClose}
          type={'delete'}
          handleClick={() => alert('확인')}
        />
      )}
    </HeaderStyled>
  );
}
const HeaderStyled = styled.div`
  background-color: ${common.color.green};
  color: ${common.color.white};
  font-family: ${common.fontFamily.logo};
  font-size: 30px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 110px;
  align-items: center;
`;
