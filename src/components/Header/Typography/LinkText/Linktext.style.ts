import styled from "styled-components";

export const StyledLinktext=styled.div`
a{
    cursor: pointer;
    color:${(props)=>props.theme.colors.primeColor}; 
}
span{
    color: ${(props)=>props.theme.colors.textColor};
}`


