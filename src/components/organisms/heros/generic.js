import React from "react"

import styled from "styled-components"

import MainContainer from "../../atoms/mainContainer"
import Jumbotron from "react-bootstrap/Jumbotron"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Title from "../../atoms/titleSection"
import CardProduto from "../../molecules/cardProduto"

const Hero = styled(Jumbotron)`
  background-color: #efefef;
  margin-bottom: 0px;
  border-radius: 0px;
`

const produtos = [
  {
    icon: "business-time",
    title: "Desenvolvimento de Startups",
    subtitle: "Negócios e Tecnologia"
  },
  {
    icon: "mobile-alt",
    title: "Desenvolvimento Mobile",
    subtitle: "Android, iOS ou Híbrido"
  },
  {
    icon: "palette",
    title: "Design de Interface",
    subtitle: "UI: User Interface"
  },
  {
    icon: "smile",
    title: "Design de Experiência",
    subtitle: "UX: User Experience"
  },
  {
    icon: "database",
    title: "Desenvolvimento de Software",
    subtitle: "Soluções de pequeno a grande porte"
  },
  {
    icon: "globe",
    title: "Websites, Blogs & Hosting",
    subtitle: "Desenvolvimento e hospedagem de sites"
  },
  {
    icon: "tasks",
    title: "Gestão de Projetos",
    subtitle: "Modelos ágeis, tradicionais e híbridos"
  },
  {
    icon: "puzzle-piece",
    title: "Transformação Digital",
    subtitle: "Inovação, Estratégia e Desenvolvimento de Produtos"
  },
];


const HeroSection = () => (
  <Hero>
    <MainContainer>
      <Title
        className="animated fadeIn"
        style={{animationDelay: `200ms`, animationDuration: `1300ms`}}
      >O que oferecemos?</Title>
      <Container>
        <Row>
          {produtos.map((produto, index) => (
            <Col xs="6" lg="3" className="mb-4">
              <div
                className="animated fadeInUp h-100"
                style={{animationDelay: `${(index*100) + 200}ms`}}
              >
                <CardProduto
                  title={produto.title}
                  subtitle={produto.subtitle}
                  icon={produto.icon}
                  key={`prod-${index}`}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </MainContainer>
  </Hero>
)

export default HeroSection
