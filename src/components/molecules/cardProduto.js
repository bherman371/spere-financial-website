import React from "react"
import styled from "styled-components"
import Card from "react-bootstrap/Card"

import "../../utils/fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardStyled = styled(Card)`
  text-align: center;
  height: 100%;
`

const CardTitleStyled = styled(Card.Title)`
  font-size: 0.9em;
  margin-top: auto !important;
  font-weight: bold;
`

const CardSubtitleStyled = styled(Card.Subtitle)`
  font-size: 0.7em;
  margin-bottom: auto !important;
  opacity: 0.8;
`

const CardProduto = ({title, subtitle, icon}) => (
  <CardStyled className="h-100">
    <Card.Body className="px-2">
      <div className="my-auto">
        <FontAwesomeIcon icon={icon} size="3x" className="mb-3" />
        <CardTitleStyled>{title}</CardTitleStyled>
        <CardSubtitleStyled className="mb-2 text-muted">{subtitle}</CardSubtitleStyled>
      </div>
    </Card.Body>
  </CardStyled>
)

export default CardProduto
