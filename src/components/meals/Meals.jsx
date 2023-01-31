import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../link/fetchApi";
import MealItem from "./meal-item/MealItem";
const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const getMeals = async () => {
    try {
      const response = await fetchApi("foods");
      setMeals(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to load meals");
    }
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <Card>
      {isLoading && !error && <p>loading......</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {meals.map((meal) => {
        return (
          <MealItem
            key={meal._id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
            id={meal._id}
            amount={meal.amount}
          />
        );
      })}
    </Card>
  );
};

export default Meals;

const Card = styled.ul`
  background-color: #ffffff;
  border-radius: 16px;
  width: 64rem;
  margin: 40px auto;
  padding: 40px 40px 36px 40px;
`;
