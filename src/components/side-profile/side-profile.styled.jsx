import styled from "styled-components";

export const SideProfile = styled.div`
padding: 40px 30px;
background-color: white;
display:flex;
flex-flow:column wrap;
justify-content:flex-end;
align-content:flex-end;
align-items:center;
text-align: center;
border-radius: 20px;
background-position:center;
background-size:cover;
gap:5px;

    h5 {
        margin-top: 150px;
        margin-bottom: 10px; 
        font-weight: 500; 
        letter-spacing: 0.05em; 
        background-color: #fff; 
        border-radius: 9999px;
        font-size:22px; 
        padding-top: 0.2rem;
        padding-bottom: 0.2rem; 
        padding-left: 1rem;
        padding-right: 1rem; 
    }

    p {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem; 
        padding-left: 0.5rem;
        padding-right: 0.5rem; 
        //margin-top: 0.75rem;
        //margin-bottom: 0.75rem; 
        background-color: #E5E7EB; 
        border-radius: 9999px; 
    }

    a {
        display: flex; 
        padding-top: 0.25rem;
        padding-bottom: 0.25rem; 
        padding-left: 0.5rem;
        padding-right: 0.5rem; 
        margin-top: 0.75rem;
        margin-bottom: 0.75rem; 
        //background-color: #E5E7EB; 
        justify-content: flex-end; 
        align-items: end; 
        border-radius: 9999px;
    }
    span{
        display: inline-block;
        white-space: nowrap;
    }


    @media (min-width: 1024px) { 
    grid-column: span 3 / span 3; 
    }

    &:hover{
        cursor:pointer;
    }
`

export const Links = styled.div`
    display: flex-row; 
    margin-left: auto;
    margin-right: auto; 
    margin-top: 1000px;
    margin-bottom: -50px; 
    justify-content: space-around; 
    align-items:flex-end;
    width: 75%; 
    


    @media (min-width: 768px) { 
    width: 100%; 
    }
`
export const Date = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem; 
    margin-top: 1.25rem;
    margin-bottom: 1.25rem; 
    background-color: #E5E7EB; 
`

export const Button = styled.button`
    background: rgb(255, 255, 255);
    color: rgb(255, 87, 74);
    border: none;
    outline: none;
    box-shadow: rgba(244, 67, 54, 0.5) 0px 5px 10px;
    padding: 15px 60px;
    cursor: pointer;
    border-radius: 30px;
    display: flex;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100px;
    font-weight: 500;
    font-size: 16px;
    height: 20px;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`

export const ProfileBottom = styled(SideProfile)`
    background: #fff;
    color:#999;
    padding:60px 0;
    margin-right:-90px;
    margin-left:-90px;
    margin-bottom:-40px;
    border-radious:20px;
    visibility:hidden;
    &:hover {
        opacity:0.8;
        visibility:visible;
    }
`