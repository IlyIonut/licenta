import styled, {keyframes} from "styled-components";

export const Container = styled.div`
position:relative;
z-index:-1;
display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
align-items: center;
flex-flow: row;
width:100%;
height:auto;
align-content: center;
flex-wrap: nowrap;


`
export const Logo = styled.div`
 margin:0px;
 display:flex;
 justify-content:center;
 margin-top:-200px;
 
 @media only screen and (max-width: 600px) {
    margin-top:0px;
 }
`

export const Col = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justifi-content:center;
    h3{
        
        font-size:40px;
        font-weight:bold;
        color: black;
        display:block;
        margin-top:-250px;
    }
    h4{
      font-size:32px;
      font-weight:semi-bold;

    }
    p{
        font-size:24px;
    }
    @media only screen and (max-width: 600px) {
      h3{
        font-size:18px;
        margin-top:-80px;
      }
      h4{
        font-size:14px;
      }
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
