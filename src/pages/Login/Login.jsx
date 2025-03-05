import React from "react";
import { Button, Card, Form, Input } from "./LoginStyled";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "O email não pode estar vazio" })
    .email({ message: "Email inválido" }),

  senha: z
    .string()
    .nonempty({ message: "A senha não pode estar vazia" })
    .min(6, { message: "Use pelo menos 6 caracter" })
    .max(24, { message: "Use no máximo  24 caracter" }),

});

export const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  function onLogin(data){
    reset()
    console.log(data)
  }

  return (
    <Card>
      <div>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit(onLogin)}>
          <div>
            <Input {...register("email")} type="email" required placeholder="E-mail" />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <Input {...register("senha")} type="password" required placeholder="Senha" />
            <p>{errors.senha?.message}</p>
          </div>

          <article>
            <Button type="submit">Login</Button>
            <p>
              Não tem uma conta? <Link to="/register">Cadastre-se aqui</Link>
            </p>
          </article>
        </Form>
      </div>
    </Card>
  );
};
