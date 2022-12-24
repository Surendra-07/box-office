import React from "react";
import styled from "styled-components";

const RadioWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;
`;

const CustomRadio = ({ label, ...restProps }) => {
  return (
    <RadioWrapper htmlFor="shows-search">
      {label}
      <input {...restProps} type="radio" />
    </RadioWrapper>
  );
};

export default CustomRadio;
