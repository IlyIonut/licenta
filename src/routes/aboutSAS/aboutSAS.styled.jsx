import styled from "styled-components";

export const AboutContainer = styled.div`
    margin-top:20px;
    padding:20px;
    width:1200px;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    h1{
        font-size:25px;
        font-weight:semi-bold;
        margin-top:10px;
        margin-bottom:25px;
    };
    p{
        margin-bottom:5px;
        background-color:#fafafa;
        border-radius:10px;
        padding:15px;
        font-size:18px;
    };
`

export const Title = styled.h3`
    text-decoration-color:#2c4a34;
    text-decoration-thickness:2px;
    font-size:32px;
    font-weight:bold;
    margin-top:20px;
    margin-bottom:20px;
    
`
export const CardContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:40px;
    margin-bottom:40px;
    width:1200px;
`
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
    background-color:#fafafa;
    overflow:hidden;
    width:20rem;
    border-radius:1rem;
    box-shadow: 0 0 10px #313131;
    
`

