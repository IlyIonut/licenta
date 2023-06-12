import styled from "styled-components";

export const SideProfile = styled.div`
    padding: 1rem; 
    background-color: #ffffff; 
    text-align: center; 
    border-radius: 1rem; 
    grid-column: span 12 / span 12; 



    @media (min-width: 1024px) { 
    grid-column: span 3 / span 3; 
    }

`

export const Links = styled.div`
    display: flex; 
    margin-left: auto;
    margin-right: auto; 
    margin-top: 1.25rem;
    margin-bottom: 1.25rem; 
    justify-content: space-around; 
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