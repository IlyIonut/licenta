import styled from "styled-components";

export const Row = styled.div`
    display:flex;
    justify-content:center;
    height:88%;
    align-items:center;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`

export const Col = styled.div`
    flex-basis:80%;
    h1{
        font-size:60px;
        font-weight:bold;
        color: black;
        -webkit-text-fill-color: white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: black;
    }
    p{
        font-size:24px;
    }
    @media (max-width: 768px) {
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        align-content:center;
        h1{
            margin-top:0px;
            margin-bottom:20px;
            margin-left:0px;
            font-size:50px;
            font-weight:bold;
            color: black;
            -webkit-text-fill-color: white; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
        }
        p{
            font-size:8px;
            padding-left:20px;
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
    @media (max-width: 768px) {
        width:100px;
        height:30px;
        display:flex;
        align-items:center;
        justify-content:center;

    }
`
export const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
align-content:center;
margin-left:20px;
gap:20px;
height:auto;
@media (max-width: 768px) {
    margin-top:20px;
    margin-left:0px;
  }
`
