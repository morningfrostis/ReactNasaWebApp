import styled from "styled-components";
import { Link } from "react-router-dom";

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const WelcomeButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const WelcomeButton = styled(Link)`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin: 0 10px;
  border: none;
  cursor: pointer;
`;
