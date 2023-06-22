import styled from 'styled-components';
import { useState } from 'react';
import common from '../styles/common';
import Header from '../components/common/Header';
import Habit from '../components/Habit';
import TextButton from '../components/common/Button/TextButton';
import Modal from '../components/common/modal/index';

export default function HabitList() {
  const [isOpen, setIsOpen] = useState(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [limitModalIsOpen, setLimitModalIsOpen] = useState(false);

  const handleCreate = () => {
    setLimitModalIsOpen(true);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
    setCreateModalIsOpen(false);
    setLimitModalIsOpen(false);
  };
  return (
    <Wrapper>
      <Header />
      <Habit
        img={1}
        title={'영양제 먹기'}
        percent={'20'}
        startDate={'2023.06.01'}
        endDate={'2023.06.30'}
      />
      <TextButton
        content={'+ 습관 추가하기 habiTree'}
        modalHandler={() => setCreateModalIsOpen(true)}
      />
      {createModalIsOpen && (
        <Modal
          isOpen={createModalIsOpen}
          handleClose={handleClose}
          type={'create'}
          handleClick={handleCreate}
        />
      )}
      {limitModalIsOpen && (
        <Modal
          isOpen={limitModalIsOpen}
          handleClose={handleClose}
          type={'limit'}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
