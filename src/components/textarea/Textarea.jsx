import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const InputSyles = styled.div`
  position: relative;
  width: 100%;
  textarea {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    color: ${(props) => props.theme.black};
    border: 1px solid transparent;
    resize: none;
    min-height: 200px;
  }
  textarea:focus {
    background-color: #fff;
    border-color: ${(props) => props.theme.primary};
  }
  .input::-webkit-input-placeholder {
    color: #84878b;
  }
  .input::-moz-input-placeholder {
    color: #84878b;
  }
`;
// eslint-disable-next-line react/prop-types
const Textarea = ({
  name = "",
  type = "text",
  children,
  control,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputSyles>
      <textarea id={name} type={type} {...field} {...props} />
    </InputSyles>
  );
};

export default Textarea;
