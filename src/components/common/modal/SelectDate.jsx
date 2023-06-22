import styled from 'styled-components';
import common from '../../../styles/common';
import { useState } from 'react';

export default function SelectDate({ placeholder }) {
  const [value, setValue] = useState('');

  return (
    <SelectDateCover>
      <input
        type="date"
        name="start-date"
        data-placeholder={placeholder}
        required
        aria-required="true"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SelectDateCover>
  );
}
const SelectDateCover = styled.div`
  position: relative;
  input {
    all: unset;
    width: 108px;
    padding-left: 20px;
  }
  input[type='date']::before {
    content: attr(data-placeholder);
    width: 100%;
  }
  input[type='date']:focus::before,
  input[type='date']:valid::before {
    display: none;
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    background-image: url('/src/assets/svg/calendar.svg');
    background-size: cover;
    width: 14px;
    height: 14px;
    position: absolute;
    left: 0;
  }
`;
