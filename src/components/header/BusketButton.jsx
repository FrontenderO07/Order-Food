import React from "react";
import styled from "styled-components";
import { ReactComponent as BusketIcon } from "../../assets/icons/basket-icon.svg";

const BusketButton = ({ count, onShowBasket, ...rest }) => {
  return (
    <StyledButton onClick={onShowBasket} {...rest}>
      <BusketIcon />
      <StyledTitle>Your Cart </StyledTitle>
      <StyledCounter id="counter">{count || 0}</StyledCounter>
    </StyledButton>
  );
};

export default BusketButton;

const StyledButton = styled.button`
  background: #5a1f08;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  padding: 12px 32px;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #2c0d00;
  }
  &:hover > #counter {
    background-color: #672003;
  }
  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledTitle = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCounter = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 4px 20px;
  color: #ffffff;
  background: #8a2b06;
  border-radius: 30px;
`;
