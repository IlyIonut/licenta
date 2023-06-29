import styled from "styled-components";


export const Card = styled.div`
    width:200px;
    height:150px;
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
export const SideProfile = styled.div`
padding: 20px 30px;
background-color: white;
display:flex;
flex-flow:column wrap;
align-items:center;
text-align: center;
border-radius: 20px;
background-position:center;
background-size:cover;
gap:5px;
width:300px;
height:450px;

    h5 {
        display:inline-block;
        white-space: nowrap;
        margin-top: 80px;
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
        @media (max-width: 768px) {
            font-size:8px;
            margin-top: 45px;
            margin-bottom: 0px;
          }
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
        @media (max-width: 768px) {
            font-size:8px;
            margin-bottom: 10px;
          }
          
    }
    span{
        display: inline-block;
        white-space: nowrap;
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
        //border-radius: 9999px;
        @media (max-width: 768px) { 
            padding-top: 0.05rem;
            padding-bottom: 0.05rem; 
            padding-left: 0.2rem;
            padding-right: 0.2rem; 
            margin-top: 0px;
            margin-bottom: 0px;
        }
    }


    @media (min-width: 1024px) { 
    grid-column: span 3 / span 3; 
    }

    &:hover{
        cursor:pointer;
    }
    @media (max-width: 768px) {
        width:150px;
        height:225px; 
      }
`

export const Links = styled.div`
    display: flex; 
    margin-left: auto;
    margin-right: auto; 
    margin-top: 1000px;
    margin-bottom: -50px; 
    justify-content: space-around; 
    align-items:flex-end;
    width: 75%; 


    @media (min-width: 768px) { 
    width: 100%; 
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
    
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
    @media (max-width: 768px) {
        font-size:8px;
        height: 15px;
        font-weight: 500;
        width:50px;
        padding: 0px 0px;
      }
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