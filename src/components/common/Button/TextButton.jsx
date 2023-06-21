import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import common from '../../../styles/common';
import Notion from '../../../assets/svg/notion.svg';
import Prev from '../../../assets/svg/arrow-left.svg';

export default function TextButton({ content, color, isSvg, modalHandler }) {
  const buttonClick = () => {
    console.log('TextButtonClick');
    modalHandler();
  };
  return (
    <TextButtonStyled color={color} isSvg={isSvg} onClick={buttonClick}>
      {isSvg && <ReactSVG src={Notion} className="svg" />}
      {content}
    </TextButtonStyled>
  );
}

const TextButtonStyled = styled.button`
  background-color: inherit;
  font-family: ${common.fontFamily.defaultFont};
  font-size: 24px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.color || common.color.gray};
  .svg {
    display: ${(props) => (props.isSvg ? 'inline-block' : 'none')};
  }
`;
