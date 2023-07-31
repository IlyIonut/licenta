import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-right:30px;
`

export const Line = styled.div`
    width: 3px; /* Adjust the width as needed */
    height: 250px; /* Adjust the height as needed */
    background-color: gray; /* Change the color to your desired line color */
    margin: 0 auto; /* To center the line horizontally */
`

export const Container = styled.div`
    h3{
        font-size:30px;
        font-weight:bold;
        padding-bottom:5px;
    }
`