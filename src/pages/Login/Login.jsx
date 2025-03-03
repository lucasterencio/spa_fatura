import React from "react";
import { Button, Card, Form, Input } from "./LoginStyled";

export const Login = () => {
  return (
    <Card>
      <div>
        <h1>Login</h1>

        <Form>
          <div>
            <label>Email</label>
            <Input type="email" required />
          </div>

          <div>
            <label>Senha</label>
            <Input type="password" required />
          </div>
          
          <article>
              <Button>Login</Button>
              <p>Não tem uma conta? Cadastre-se aqui</p>
          </article>
        </Form>
      </div>
    </Card>
  );
};
