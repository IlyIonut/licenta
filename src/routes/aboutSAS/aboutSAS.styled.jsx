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
    @media only screen and (max-width: 600px) {
        width:100%;
        padding:30px 30px;
        justify-content:center;
        align-items:center;
        h3{
            font-size: 14px ;
            line-height: 24px;
        }
        h5{
            font-size: 12px ;
            line-height: 22px;
        }
        p{
            font-size:12px;
        }
    }
`

export const Title = styled.h2`
    text-decoration-color:#2c4a34;
    text-decoration-thickness:2px;
    font-size:32px;
    font-weight:bold;
    margin-top:20px;
    margin-bottom:20px;
    @media only screen and (max-width:600px){
        font-size:22px;
        margin-top:10px;
    }
    
`
export const CardContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:40px;
    margin-bottom:40px;
    width:1200px;
    @media only screen and (max-width:600px){
        width:100%;
        flex-direction:column;
        align-items:center;
    }
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
    @media only screen and (max-width:600px){
        p{
            font-size:12px;
            margin-bottom:10px;
        }
        width:15rem;
        margin-top:40px;
        margin-bottom:40px;
        height:400px;
    }
    
    
`

