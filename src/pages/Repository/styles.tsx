import styled from 'styled-components';

export const RepositoryHeader = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  a {
    color: #a8a8b3;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfos = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      margin-right: 24px;
      border-radius: 50%;
    }

    div {
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;

    margin-top: 40px;
    list-style: none;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }

    li {
      & + li {
        margin-left: 80px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  transition: transform 0.2s;

  a {
    &:hover {
      transform: translateX(5px);
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
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    P {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 8px;
    }
  }
`;
