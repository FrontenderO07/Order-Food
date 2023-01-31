import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...rest
}) => {
  return (
    <StyledButton variant={variant} borderStyle={borderStyle} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
const getBackgroundColor = (props) => {
  return props.variant === "contained" ? " #8A2B06" : "#fff";
};
const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8A2B06";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#8A2B06";
};

const getRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : "6px";
};
const StyledButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: ${getRadius};
  font-weight: 600;
  padding: 10px 32px;
  color: ${getColor};
  display: flex;
  align-items: center;
  border: ${getBorder};
  cursor: pointer;
  :hover {
    background: #7e2a0a;
    color: #fff;
    path {
      stroke: white;
    }
  }

  :active {
    background: #993108;
  }
`;
