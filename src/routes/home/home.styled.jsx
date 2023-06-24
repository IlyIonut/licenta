import styled from "styled-components"

export const Container = styled.div`
    witdh:100%;
    height:80vh;
    padding:15px 140px;
    @media (max-width: 768px) {
        flex-direction: column;
        padding:0px;
        margin-right:40px;
      }
`