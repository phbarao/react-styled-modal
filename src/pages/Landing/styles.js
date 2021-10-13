import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://source.unsplash.com/random");
  background-size: cover;
  background-position: center;
`;

export const Button = styled.button`
  background: #545863;
  color: white;
  font-size: 1rem;
  padding: 10px 30px;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-radius: 3rem;
    transition: 0.3s;
    box-shadow: 0.5rem 0.5rem 2rem rgba(48, 55, 66, 0.5);
  }
`;
