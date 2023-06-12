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
    background-color: grey; 
    text-align: center; 
    border-radius: 1rem; 
    width:20rem;
    grid-column: span 3 / span 3;


    @media (min-width: 1024px) { 
    grid-column: span 3 / span 3; 
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