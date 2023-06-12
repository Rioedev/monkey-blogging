import React from "react";
import styled from "styled-components";

const AuthenticationPageStyled = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 700px;
    margin: 0 auto;
  }
`;

// eslint-disable-next-line react/prop-types
const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyled>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </AuthenticationPageStyled>
  );
};

export default AuthenticationPage;
