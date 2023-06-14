import styled from "styled-components";

export const SideProfile = styled.div`
padding: 1rem;
background-color: white;
text-align: center;
border-radius: 1rem;
width: 20rem;

    img {
        margin-left: auto;
        margin-right: auto; 
        width: 8rem; 
        height: 8rem; 
        border-radius: 9999px; 
    }
    h3 {
        margin-top: 1rem;
        margin-bottom: 1rem; 
        font-weight: 500; 
        letter-spacing: 0.05em; 
    }

    p {
        padding-top: 0.25rem;
        padding-bottom: 0.25rem; 
        padding-left: 0.5rem;
        padding-right: 0.5rem; 
        margin-top: 0.75rem;
        margin-bottom: 0.75rem; 
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
        background-color: #E5E7EB; 
        justify-content: center; 
        align-items: center; 
        border-radius: 9999px;
    }


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

export const Button = styled.button`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; 
    margin-top: 0.5rem;
    margin-bottom: 0.5rem; 
    background-image: background-image: linear-gradient(to right, var(--tw-gradient-stops)); 
    background-color: #60A5FA; 
    color: #ffffff; 
    width: 66.666667%; 
    border-radius: 9999px; 
`