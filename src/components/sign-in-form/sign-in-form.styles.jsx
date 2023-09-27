import styled from "styled-components";

export const SignUpContainer = styled.div`
    display:flex;
    flex-direction:column;
    
    width:380px;

    h2{
        margin:10px 0;
    }
    @media only screen and (max-width:600px){
        width:100%;
        align-items:center;
    }
`
export const ButtonsContainer = styled.div`
        display:flex;
        justify-content: space-between;
        @media only screen and (max-width:600px){
            width:auto;
            flex-direction:column;
            align-items:center;
        }
`
export const Button = styled.button`
    width:180px;
    color:#fff;
    font-size:12px;
    padding:12px 0;
    background:#000;
    border: 0;
    border-radius: 20px;
    outline:none;
    margin-top:30px;
   
`
