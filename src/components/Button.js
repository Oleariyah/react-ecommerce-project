import styled from "styled-components";

export const PrimaryButton = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  background: transparent;
  border: 0.1rem solid var(--white);
  color: var(--white);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &: hover {
    background: var(--white);
    color: var(--main-black);
  }
  &: focus {
    outline: none;
  }
`;

export const SecondaryButton = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  background: transparent;
  border: 0.1rem solid ${props => (props.new ? "orange" : "var(--red-pink)")};
  color: var(--main-black);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &: hover {
    background: ${props => (props.new ? "orange" : "var(--red-pink)")};
    color: var(--white);
    border: 0.1rem solid var(--white);
  }
`;
