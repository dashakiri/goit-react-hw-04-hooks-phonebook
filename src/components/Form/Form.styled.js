import styled from "@emotion/styled";

export const ContactForm = styled.form`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 350px;
  height: 150px;
  border: 1px solid grey;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  &:hover,
  &:focus {
    border: 2px solid blue;
  }
`;

export const Button = styled.button`
  width: 100px;
  border: 1px solid grey;
  &:hover,
  &:focus {
    background-color: blue;
    border: 1px solid blue;
    color: white;
  }
`;
