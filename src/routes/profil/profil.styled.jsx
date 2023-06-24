import styled from "styled-components";

export const Profilul = styled.div`
padding: 1rem;
display:flex;
justify-content:space-betweeen;
`
export const AuthContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: 900px;
    margin:30px auto;
`

export const ProfileContainer = styled.div`
    display: grid;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    grid-template-columns: repeat(12, minmax(0px, 1fr));
    gap: 1.5rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    justify-items: end;
    @media (min-width: 640px) { 
    padding-left: 5rem;
    padding-right: 5rem; 
    }
    @media (min-width: 768px) { 
    }
    @media (min-width: 1024px) { 
    padding-left: 12rem; 
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