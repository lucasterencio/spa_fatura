import React from "react";
import { Button, Card, Form, Input } from "./LoginStyled";
import { Link, Outlet } from "react-router-dom";

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
              <p>Não tem uma conta? <Link to="/register">Cadastre-se aqui</Link></p>
          </article>
        </Form>
      </div>
    </Card>
  );
};
