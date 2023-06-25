import React from "react";
import styled from "styled-components";

const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  margin-bottom: 25px;
  @media screen and (max-width: 1023.98px) {
    margin-bottom: 25px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

// eslint-disable-next-line react/prop-types
const Field = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};

export default Field;
