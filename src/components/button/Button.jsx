import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../loading/LoadingSpinner";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  width: 100%;
  height: ${(props) => props.height || "66px"};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  // eslint-disable-next-line react/prop-types
  type = "button",
  // eslint-disable-next-line react/prop-types
  onClick = () => {},
  // eslint-disable-next-line react/prop-types
  children,
  ...props
}) => {
  // eslint-disable-next-line react/prop-types
  const { isLoading } = props;
  // eslint-disable-next-line no-extra-boolean-cast
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <ButtonStyles type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyles>
  );
};

export default Button;
