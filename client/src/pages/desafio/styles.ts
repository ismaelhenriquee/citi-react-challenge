import styled from "styled-components";

export const Container=styled.div`
width: 100%;
`;
export const Card=styled.div`
box-sizing: border-box;
background: linear-gradient(
90deg,
rgb(9.47, 9.02, 10.2) 0%,
rgb(23.68, 22.56, 25.5) 37.5%,
rgb(54.48, 51.88, 58.65) 100%,
rgb(56.85, 54.14, 61.2) 100%
);
background-color: rgba(255, 255, 255, 1);
width: 100%;
height: 97vh;
padding:8% 5% 8%  5%;
display: flex;
justify-content: center;
align-items: center;


`;
export const Content=styled.div`
width: 32%;
h1{
    color: #ffffff;
font-family: "Roboto Condensed-Bold", Helvetica;
font-size: 4rem;
font-weight: 700;
left: 0;
letter-spacing: 0;
line-height: 4rem;
}
h4{
color: #8c8c99;
font-family: "Roboto-Regular", Helvetica;
font-size: 1.9rem;
font-weight: 400;
letter-spacing: 0;
margin-top: 10%;
margin-bottom: 2%;
}
p{
color: rgba(81, 230, 120, 1);
font-family: "Roboto-Regular", Helvetica;
font-size: 0.5rem;
font-weight: 400;
letter-spacing: 0;
line-height: 2%;
white-space: nowrap;

}
img{
    width: 35%;
    margin-bottom: 15%;
}

`;
export const ImgMangue=styled.img`
width: 58%;

`;

export const Faixa=styled.div`
background-color: rgba(81, 230, 120, 1);
width: 100%;
height: 3vh;
`;
