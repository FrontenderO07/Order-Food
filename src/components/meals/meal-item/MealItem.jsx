import styled from "styled-components";
import MealItemForm from "./MealItemForm";
const MealItem = ({ title, description, price, id, amount }) => {
  return (
    <List>
      <ListItem>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price}</Price>
      </ListItem>
      <MealItemForm id={id} title={title} price={price} amount={amount} />
    </List>
  );
};

export default MealItem;

const List = styled.li`
  list-style: none;
  border-bottom: 1px solid #d6d6d6;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :last-child {
    border: none;
    margin-bottom: 0;
  }
`;
const ListItem = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`;
const Description = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-top: 4px;
`;
const Price = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
  margin-top: 4px;
`;
