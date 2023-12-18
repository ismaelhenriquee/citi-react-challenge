import {Desktop,Citibranco} from "../../assets"
import{Container,Card,ImgMangue,Faixa,Content} from "./styles"
import React from "react";
import styled from "@emotion/styled";

export default function Desafio() {
    return (
        <Container>
            <Card>
                <Content>
                    <img src={Citibranco.src} alt="Logo CITI" />
                    <h1>Página de Login</h1>
                    <h4>Desafio de React</h4>
                    <p>Made By Ismael Henrique&lt;&gt;</p>
                </Content>
                <ImgMangue src={Desktop.src} alt="Descktop Imagem" />
            </Card>
            <Faixa></Faixa>
        </Container>
    );
}
