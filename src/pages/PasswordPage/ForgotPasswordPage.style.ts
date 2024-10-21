import styled from "styled-components";


export const StyleForgotPasswordPage = styled.div`

  box-shadow: 0 0 10px ${props=>props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${props=>props.theme.colors.bgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }
@media (max-width: 530px) {
 
    width: 100%;
}
p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 20px;
  }


.reg__link {
  flex: 0 0 58px;
  transition: 200ms;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
    transition: 100ms;
  }


}
`
 