import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

const Basket = ({ onClose }) => {
  const { items, updateBasketItem, deleteBasketItem } =
    useContext(BasketContext);
  const getTotalPrice = () => {
    return items.reduce((s, { price, amount }) => s + amount * price, 0);
  };

  const decrementAmount = (id, amount) => {
    if (amount > 1) {
      updateBasketItem({ amount: amount - 1, id: id });
    } else {
      deleteBasketItem(id);
    }
  };
  const incrementAmount = (id, amount) => {
    updateBasketItem({ amount: amount + 1, id: id });
  };

  return (
    <Modal onClose={onClose}>
      <Content>
        <FixedHeightContainer>
          {items.map((item) => {
            return (
              <BasketItem
                title={item.title}
                decrementAmount={() => decrementAmount(item._id, item.amount)}
                incrementAmount={() => incrementAmount(item._id, item.amount)}
                key={item._id}
                price={item.price}
                amount={item.amount}
              />
            );
          })}
        </FixedHeightContainer>
        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;
const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
