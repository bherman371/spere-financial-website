import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import Card from "react-bootstrap/Card"

import "../../utils/fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Carousel from 'react-bootstrap/Carousel'

const CardStyled = styled(Card)`
  background-color: #EDEDED;
  text-align: left;
`

const CarouselCaption = styled(Carousel.Caption)`
  text-align: left;
  overflow: hidden;
  height: 160px;

  h4 {
    font-size: 1.1em;
    line-height: 1.2em;
  }

  p {
    font-size: 1em;
    line-height: 1.4em;
  }

  &:before {
    content: '';
    width: 100%;
    height: 20%;
    position: absolute;
    left: 0;
    top: 80%;
    background: linear-gradient(transparent, #EDEDED);
    background: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(237, 237, 237, 1.0));
    z-index: 999;
  }
`

const CarouselInner = styled.div`
  height: 210px;
  text-align: left;
`

const CardNossaEquipe = () => {

  const data = useStaticQuery(graphql`
    query {
      equipe: allEquipeYaml(limit: 3) {
        nodes {
          name
          description
          linkedin
        }
      }
    }
  `)

  return (
    <CardStyled>
      <Carousel
        indicators={false}
        prevIcon={(<FontAwesomeIcon icon="chevron-left" size="lg" className="text-dark" />)}
        nextIcon={(<FontAwesomeIcon icon="chevron-right" size="lg" className="text-dark" />)}
      >
        {data.equipe.nodes.map(member => (
          <Carousel.Item key={member.name}>
            <CarouselInner>
              <CarouselCaption className="py-0">
                <h4>
                  {member.name}
                  <a
                    href={member.linkedin}
                    className="ml-3"
                    style={{ fontSize: "0.65em" }}
                    target="_blank noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} className="mr-1" />
                    LinkedIn
                  </a>
                </h4>
                <p className="text-dark">{member.description}</p>
              </CarouselCaption>
            </CarouselInner>
          </Carousel.Item>
        ))}
      </Carousel>
    </CardStyled>
  )
}

export default CardNossaEquipe
