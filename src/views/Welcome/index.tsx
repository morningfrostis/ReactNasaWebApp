import React from "react";
import { WelcomeContainer, WelcomeButtons, WelcomeButton } from "./style";

const Welcome: React.FC = () => {
  return (
    <WelcomeContainer>
      <h1>Welcome to the application</h1>
      <p>Please login or create an account to continue.</p>
      <WelcomeButtons>
        <WelcomeButton to="/login">Login</WelcomeButton>
        <WelcomeButton to="/signup">Signup</WelcomeButton>
      </WelcomeButtons>
    </WelcomeContainer>
  );
};

export default Welcome;
