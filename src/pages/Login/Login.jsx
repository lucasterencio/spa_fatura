import React from "react";
import { Button, Card, Form, Input } from "./LoginStyled";

export const Login = () => {
  return (
    <Card>
      <div>
        <h1>Login</h1>

        <Form>
          <div>
            <Input type="email" required placeholder="E-mail"/>
          </div>

          <div>
            <Input type="password" required placeholder="Senha"/>
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
