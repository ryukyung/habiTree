import styled from 'styled-components';
import common from '../../../styles/common';

export default function BoxButton({ content, width, color, modalHandler }) {
  const buttonClick = () => {
    console.log('BoxButtonClick');
    modalHandler();
  };
  return (
    <BoxButtonStyled width={width} color={color} onClick={() => buttonClick()}>
      {content}
    </BoxButtonStyled>
  );
}
const BoxButtonStyled = styled.button`
  width: ${(props) => props.width || '50px'};
  height: 30px;
  font-size: 24px;
  font-family: ${common.fontFamily.defaultFont};
  border: 1px solid ${common.color.gray};
  border-radius: 4px;
  background-color: ${(props) => props.color || common.color.gray};
  color: ${common.color.black};
  cursor: pointer;
`;
