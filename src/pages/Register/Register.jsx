import React from "react";
import { Button, Card, Form, Input } from "../Login/LoginStyled";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Card>
      <div>
        <h1>Register</h1>

        <Form>
          <div>
            <Input type="text" required placeholder="Username" />
          </div>

          <div>
            <Input type="email" required placeholder="E-mail" />
          </div>

          <div>
            <Input type="password" required placeholder="Senha" />
          </div>

          <div>
            <Input type="password" required placeholder="Confirmar senha" />
          </div>

          <article>
            <Button>Cadastrar</Button>
            <p><Link to="/">Faça login</Link></p>
          </article>
        </Form>
      </div>
    </Card>
  );
};
