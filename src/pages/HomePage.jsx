import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebases/firebase-config";
import styled from "styled-components";
import Header from "../components/layout/Header";

const HomePageStyles = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Header></Header>
    </HomePageStyles>
  );
};

export default HomePage;
