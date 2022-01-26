import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    color: #F2D64B;
    position: absolute
  }
`

export const Jogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 10rem;
  margin-top: 15rem;

  h2 {
    font-size: 1.5rem;
    color: #fff;

    &:first-child {
      margin: 1rem 0;
      padding-bottom: 1rem 0;
      font-size: 1.7rem
    }
  }

  span {
    color: #F2D64B;
  }

  h3 {
    padding: 0.5rem;
    font-size: 1.5rem;
    color: #fff
  }
`