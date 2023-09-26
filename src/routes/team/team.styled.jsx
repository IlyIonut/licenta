import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export const UsersContainer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
align-content:flex-center;
gap:20px;
margin-top:40px;
`
export const TeamName = styled.div`
 h3{
    font-size:35px;
    font-weight: bold;
    padding:20px;
 }
`
export const SelectMenu = styled.select`
   appearance: none;
   border: 0;
   outline: 0;
   font: inherit;
   /* Personalize */
   width: 20em;
   height: 3em;
   padding: 0 4em 0 1em;
   color: grey;
   border-radius: 0.25em;
   box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
   cursor: pointer;
 `
 
export const OptionMenu = styled.option`
   padding:0 30px 0 10px;
   min-height:40px;
   display:flex;
   align-items:center;
   background:white;
   border-top:#222 solid 1px;
   position:absolute;
   top:0;
   width: 100%;
   pointer-events:none;
   order:2;
   z-index:1;
   transition:background .4s ease-in-out;
   box-sizing:border-box;
   overflow:hidden;
   white-space:nowrap;
   
   &:hover {
   background:#666;
 }
 `
 export const CustomSwiper = styled(Swiper)`
   @media (max-width: 767px) {
      .swiper-container {
         display:flex;
         justify-content:center;
         align-items:center;
       }
   
       .swiper-slide {
         display:flex;
         justify-content:center;
         align-items:center;
       }
   }
 `