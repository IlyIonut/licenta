import styled, {keyframes} from "styled-components";

export const Container = styled.div`

display: flex;
-webkit-box-pack: end;
justify-content: flex-end;
align-items: center;
flex-flow: row;
margin-left: 650px;
margin-top:150px;
align-content: center;
flex-wrap: nowrap;

`

export const Col = styled.div`
    display: flex;
    height: 88%;
    flex-wrap: wrap;
    h3{
        
        font-size:40px;
        font-weight:semi-bold;
        color: black;
        -webkit-text-fill-color: white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }
    p{
        font-size:24px;
    }
    // @media (max-width: 768px) {
    //     display:flex;
    //     flex-direction: column;
    //     justify-content:center;
    //     align-items:center;
    //     align-content:center;
    //     h1{
    //         margin-top:0px;
    //         margin-bottom:20px;
    //         margin-left:0px;
    //         font-size:50px;
    //         font-weight:bold;
    //         color: black;
    //         -webkit-text-fill-color: white; /* Will override color (regardless of order) */
    //         -webkit-text-stroke-width: 1px;
    //         -webkit-text-stroke-color: black;
    //     }
    //     p{
    //         font-size:8px;
    //         padding-left:20px;
    //     }
    //   }
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
    // @media (max-width: 768px) {
    //     width:100px;
    //     height:30px;
    //     display:flex;
    //     align-items:center;
    //     justify-content:center;

    // }
`

export const animate = keyframes`
  0%, 100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%,
                      54% 60%, 70% 61%, 84% 59%, 100% 52%,
                      100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%,
                      51% 62%, 67% 50%, 84% 45%, 100% 46%,
                      100% 100%, 0% 100%);
  }
`;

// Create a styled component with the animation
export const Title = styled.div`
display:flex;
justify-content:center;
  h2 {
    position: absolute;
    color: white;
    transform: translate(-50%, -50%);
    font-size: 20em;
    font-weight:bold;
    font-family:'Poppins',sans-serif;

    &:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 3px black;
    }

    &:nth-child(2) {
      color: black;
      animation: ${animate} 4s ease-in-out infinite;
    }
  }
`;

