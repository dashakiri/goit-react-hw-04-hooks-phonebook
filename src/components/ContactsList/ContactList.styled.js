import styled from "@emotion/styled";

export const ListOfContacts = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 3px;
`;

export const Button = styled.button`
  margin-left: 10px;
  border: 1px solid grey;
  &:hover,
  &:focus {
    background-color: blue;
    border: 1px solid blue;
    color: white;
  }
`;
