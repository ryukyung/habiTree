import { ReactSVG } from 'react-svg';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import common from '../../../styles/common';
import BoxButton from '../Button/BoxButton';
import noSave from '../../../assets/svg/no-save.svg';
import SelectDate from './SelectDate';

const LimitModal = (handleClose) => {
  return (
    <LimitModalStyled onClick={(e) => e.stopPropagation()}>
      <ReactSVG src={noSave} />
      <div className="text-content">
        <span className="title">앗 이런!</span>
        <br />
        <span>습관은 최대 5개까지 만들 수 있어요.</span>
        <br />
        <span>오류코드: LESS THAN 5 HABITS</span>
        <br />
      </div>
      <BoxButton content={'확인'} modalHandler={handleClose} />
    </LimitModalStyled>
  );
};

const DeleteModal = (handleClose, handleClick) => {
  return (
    <DeleteModalStyled onClick={(e) => e.stopPropagation()}>
      <span>정말 삭제하겠습니까?</span>
      <div className="box-cover">
        <BoxButton
          content={'취소'}
          color={common.color.white}
          modalHandler={handleClose}
        />
        <BoxButton content={'확인'} modalHandler={handleClick} />
      </div>
    </DeleteModalStyled>
  );
};

const CreateModal = (handleClose, handleClick) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const maxLength = 20;
  const titleLength = title.length;

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const isEndDateValid =
    startDate !== '' && endDate !== '' && endDate >= startDate;
  const handleButtonClick = () => {
    if (isEndDateValid) {
      handleClick();
    } else {
      alert('종료 날짜는 시작 날짜보다 커야합니다.');
    }
  };
  return (
    <CreateModalStyled onClick={(e) => e.stopPropagation()}>
      <TitleStyled>
        <input
          type="text"
          placeholder="제목"
          maxLength={maxLength}
          value={title}
          onChange={handleChange}
        />
        <span>
          {titleLength}/{maxLength}
        </span>
      </TitleStyled>
      <SelectDateStyled>
        <SelectDate
          placeholder={'시작 날짜'}
          value={startDate}
          onChange={handleStartDateChange}
        />
        ~
        <SelectDate
          placeholder={'종료 날짜'}
          value={endDate}
          onChange={handleEndDateChange}
        />
      </SelectDateStyled>
      <ButtonStyled>
        <BoxButton
          content={'취소'}
          width={'175px'}
          modalHandler={handleClose}
        />
        <BoxButton
          content={'등록하기'}
          width={'175px'}
          color={common.color.gray}
          modalHandler={handleButtonClick}
          disabled={!isEndDateValid}
        />
      </ButtonStyled>
    </CreateModalStyled>
  );
};

const Modal = ({ isOpen, handleClose, type, handleClick }) => {
  const typeObj = {
    create: CreateModal(handleClose, handleClick),
    limit: LimitModal(handleClose),
    delete: DeleteModal(handleClose, handleClick),
  };

  return (
    <Wrapper onClick={handleClose} type={type}>
      {typeObj[type]}
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.type === 'create' ? 'end' : 'center')};
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${common.color.opacity};
  cursor: pointer;
  z-index: 99;
  > div {
    cursor: default;
  }
`;

const LimitModalStyled = styled.div`
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

const DeleteModalStyled = styled.div`
  background-color: ${common.color.white};
  width: 280px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-family: ${common.fontFamily.defaultFont};
  font-size: 30px;
  border-radius: 12px;
  color: ${common.color.black};
  .box-cover {
    width: 116px;
    display: flex;
    justify-content: space-between;
  }
`;

const CreateModalStyled = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${common.fontFamily.defaultFont};
  background-color: ${common.color.white};
  color: ${common.color.gray};
`;

const TitleStyled = styled.div`
  width: 360px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${common.color.gray};
  input {
    all: unset;
    width: 80%;
  }
  input::placeholder {
    color: ${common.color.gray};
  }
`;
const SelectDateStyled = styled.div`
  width: 360px;
  height: 30px;
  display: flex;
  margin-bottom: 16px;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${common.color.gray};
`;

const ButtonStyled = styled.div`
  width: 360px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;
