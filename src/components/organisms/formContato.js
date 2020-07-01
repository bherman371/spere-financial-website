import React from "react"

import Form from "react-bootstrap/Form"
import Button from "../atoms/button"

const FormContato = () => (
  <Form
    action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfFW5OuAwoPXpmnBwpdzCFzn-eUmeS7IAKXO363Ap6BmGm6mA/formResponse"
    style={{maxWidth: "600px"}}
  >
    <Form.Group controlId="formBasicName" style={{maxWidth: "400px"}}>
      <Form.Label>Nome <span className="text-danger">*</span></Form.Label>
      <Form.Control name="entry.2068588982" type="text" required />
    </Form.Group>

    <Form.Group controlId="formBasicEmail" className="mb-4" style={{maxWidth: "400px"}}>
      <Form.Label>Email <span className="text-danger">*</span></Form.Label>
      <Form.Control name="entry.1331529281" type="email" required />
      <Form.Text className="text-muted">
        Não compartilharemos o seu email com outras pessoas.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPhone" style={{maxWidth: "400px"}}>
      <Form.Label>Telefone <span className="text-danger">*</span></Form.Label>
      <Form.Control name="entry.1882365468" type="text" required />
    </Form.Group>

    <Form.Group controlId="formBasicCompany" style={{maxWidth: "400px"}}>
      <Form.Label>Empresa (opcional)</Form.Label>
      <Form.Control name="entry.18251105" type="text" />
    </Form.Group>

    <Form.Group controlId="formBasicDescription">
      <Form.Label>Descreva brevemente em que podemos ajudar (opcional)</Form.Label>
      <Form.Control name="entry.1641523938" as="textarea" rows="3" />
    </Form.Group>

    <Button variant="primary" type="submit" className="mt-2 px-4">
      Enviar
    </Button>
  </Form>
)

export default FormContato
