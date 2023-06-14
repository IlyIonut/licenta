import styled from "styled-components";

export const Row = styled.div`
    display:flex;
    height:88%;
    align-items:center;
`

export const Col = styled.div`
    flex-basis:50%;
    h1{
        font-size:100px;
    }
    p1{
        font-size:11px;
        line-height:15px;
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

export const Card = styled.div`
    width:200px;
    height:230px;
    display:inline-block;
    border-radius:10px;
    padding:15px 25px;
    box-sizing:border-box;
    cursor:pointer;
    transitions:transform 0.5s;
    &:hover{
        transform: translateY(-10px);
    }
`