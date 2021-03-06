import styled from "styled-components";
import { Link } from "react-router-dom";
export const CardArea= styled.div`
    border-radius:1rem;
    display: flex;
    flex-wrap: wrap;
    width: 110%;
    height: auto;
`;

export const Linked= styled(Link)`
    text-decoration: none;
`;
export const Empty= styled.div`
    background-color: #ffffff;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;
export const Img= styled.img`

background-color: aliceblue;
width: 40%;
@media(max-width:800px){
    width: 100%;  
  
  }
`;
