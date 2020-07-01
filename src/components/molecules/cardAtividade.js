import React from "react"
import styled from "styled-components"
import Card from "react-bootstrap/Card"

import "../../utils/fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardStyled = styled(Card)`
  background-color: #1C1C1C;
  text-align: center;
  height: 100%;
  border-radius: 0px;
`

const CardTitleStyled = styled(Card.Title)`
  font-size: 0.9em;
  margin-top: auto !important;
  margin-bottom: auto !important;
  font-weight: bold;
`

const CardAtividade = ({title, icon}) => (
  <CardStyled className="h-100">
    <Card.Body className="px-2">
      <div className="my-auto">
        <FontAwesomeIcon icon={icon} size="3x" className="mb-3" />
        <CardTitleStyled>{title}</CardTitleStyled>
      </div>
    </Card.Body>
  </CardStyled>
)

export default CardAtividade
