import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import BusketButton from "./BusketButton";
const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext);
  const [animationClass, setAnimationClass] = useState("");
  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [items]);
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton
        onShowBasket={onShowBasket}
        className={animationClass}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
  z-index: 1;
`;
const Logo = styled.p`
  font-weight: 600;
  line-height: 57px;
  color: #ffffff;
  font-size: 38px;
  margin: 0;
`;
