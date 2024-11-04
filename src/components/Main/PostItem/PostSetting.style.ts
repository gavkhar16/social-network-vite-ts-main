import styled from "styled-components";


export const StylePostSettings = styled.div`

.settings-container {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    padding: 10px; 
    background-color: #f8f9fa; 
    border: 1px solid #dee2e6; 
    border-radius: 5px; 
    margin: 10px 0; 
}

.settingBtn {
    cursor: pointer; 
    color: #007bff; 
    transition: color 0.2s; 
}
&:hover{
    background-color: #4E5754;
}
.settingBtn:hover {
    color: #0056b3; 
}
`