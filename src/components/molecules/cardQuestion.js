import React from "react"
import styled from "styled-components"
import Card from "react-bootstrap/Card"
import Accordion from "react-bootstrap/Accordion"

import "../../utils/fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AccordionStyled = styled(Accordion)`
  cursor: pointer;
  -webkit-box-shadow: 0px 2px 4px rgba(60, 60, 60, 0.2);
  box-shadow: 0px 2px 4px rgba(60, 60, 60, 0.2);
  transition: box-shadow 250ms ease;
  
  &:hover {
    -webkit-box-shadow: 0px 2px 4px rgba(60, 60, 60, 0.4);
    box-shadow: 0px 2px 4px rgba(60, 60, 60, 0.4);
  }
`

const CardTitleStyled = styled(Card.Title)`
`

const CardAtividade = ({question, answer, answerHTML}) => {
  return (
    <>
      <AccordionStyled className="mb-3">
        <Card className="text-left">
          <Accordion.Toggle as={Card.Header} eventKey="0" className="py-4">
            <FontAwesomeIcon icon="plus" size="sm" className="mr-2" />
            {question}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{answer}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </AccordionStyled>
    </>
  )
}

CardAtividade.defaultProps = {
  question: "empty",
}

export default CardAtividade
