import styled from 'styled-components';
import common from '../../styles/common';
import IconButton from './Button/IconButton';
import TextButton from './Button/TextButton';

export default function Header({ isDetail }) {
  return (
    <HeaderStyled isDetail={isDetail}>
      {isDetail && <IconButton isPrev={true} />}
      habiTree
      {isDetail && <TextButton content={'삭제'} color={common.color.white} />}
    </HeaderStyled>
  );
}
const HeaderStyled = styled.div`
  margin-top: 10px;
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
