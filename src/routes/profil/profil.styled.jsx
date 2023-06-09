import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: grid; 
    padding-left: 1.25rem;
    padding-right: 1.25rem; 
    margin-top: 3.5rem;
    margin-bottom: 3.5rem; 
    grid-template-columns: repeat(12, minmax(0, 1fr)); 
    gap: 1.5rem; 

    @media (min-width: 640px) { 
    padding-left: 5rem;
    padding-right: 5rem; 
    }
    @media (min-width: 768px) { 
    }
    @media (min-width: 1024px) { 
    padding-left: 12rem;
    padding-right: 12rem; 
    }

`


export const SideProfile = styled.div`
    padding: 1rem; 
    background-color: #ffffff; 
    text-align: center; 
    border-radius: 1rem; 
    grid-column: span 12 / span 12; 



    @media (min-width: 1024px) { 
    grid-column: span 3 / span 3; 
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

`

export const ContinutContainer = styled.div`
        display: flex; 
        overflow: hidden; 
        background-color: #ffffff; 
        flex-direction: column; 
        border-radius: 1rem; 
        grid-column: span 12 / span 12; 



        @media (min-width: 1024px) { 
        grid-column: span 9 / span 9; 
        }

`