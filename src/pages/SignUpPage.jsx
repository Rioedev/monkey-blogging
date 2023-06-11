import { Input } from "../components/input";
import { Label } from "../components/label";
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const SignUpPageStyles = styled.div`
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
  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({});

  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <div className="field">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
