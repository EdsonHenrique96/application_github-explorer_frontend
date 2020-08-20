import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3A3A3A;

  font-size: 48px;
  font-weight: bold;
  line-height: 56px;

  max-width: 450px; 

  margin-top: 102px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;

    height: 70px;
    padding: 0 24px;

    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    background: #04D361;
    border: 0;

    border-radius: 0 5px 5px 0;
    color: #FFF;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  transition: transform 0.2s;

  a {
    &:hover {
      transform: translateX(10px);

      img {
        width: 68px;
        height: 68px;
      }
    }

    /* 
      O & representa o elemento atual, 
      toda vez que o 'a' for precedido por & que nesse caso é outro 'a',
      eu aplico a margem. Assim não é aplicado no primeiro 'a'
    */
    & + a {
      margin-top: 16px;
    }

    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    strong {
      font-size: 20px;
      color: #3D3D4D;
    }

    P {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 8px;
    }
  }

  svg {
    margin-left: auto;
    color: #C9C9D4;
  }
`;