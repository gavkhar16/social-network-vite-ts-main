import styled from "styled-components";

export const StyleCodeEnter = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.bgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 20px;
  }

  .timer {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray};
    margin: 20px 0;
  }

  form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    input {
      width: 56px;
      height: 73px;
      text-align: center;
      font-size: 40px;
      font-weight: 500;
      border: 1px solid ${(props) => props.theme.colors.lightGray};
      border-radius: 8px;
      background-color: ${(props) => props.theme.colors.lightGray};
    }
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme.colors.gray};

    a {
      color: ${(props) => props.theme.colors.primeColor};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
