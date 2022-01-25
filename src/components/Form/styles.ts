import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;

  h1 {
    font-size: 2.5rem;
    color: #F2D64B;
    margin-bottom: 3rem;
  }

  input {
    width: 30%;
    height: 4rem;
    padding: 0 1.5rem; 
    border: 0;
    border-radius: 2rem;
    font-size: 1rem;
    color: #2F1540;
    font-weight: 700;

    & + input {
      margin-top: 2rem
    }

    &::placeholder {
      font-size: 1rem;
      color: #2F1540;
      opacity: 0.7;
    }
  }

  button[type = "submit"] {
    width: 30%;
    height: 4rem;
    border: 0;
    border-radius: 2rem;
    margin-top: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    background: #F2D64B;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`