import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/images/image.jpg";
import SummaryInfoCard from "./SummaryInfoCard";
const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt="Summary" />
      <SummaryInfoCard />
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  height: 527px;
`;

const StyledImg = styled.img`
  height: 432px;
  width: 100%;
`;
