import React, {  } from "react";
import { Button, Card, Form, Input } from "./RegisterStyled";
import { Link } from "react-router-dom";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({

    username: z
    .string()
    .nonempty({message: "O username não pode estar vazio"})
    .regex(/^[A-Za-z]+$/i, "Apenas letras são permitidas")
    .min(3, {message: "Use pelo menos 3 caracter"}),


    email: z
    .string()
    .nonempty({message: "O email não pode estar vazio"})
    .email({message: "Email inválido"}),


    senha: z
    .string()
    .nonempty({message: "A senha não pode estar vazia"})
    .min(6, {message: "Use pelo menos 6 caracter"})
    .max(12, {message: "Use no máximo  12 caracter"}),

    
    confirmSenha: z
    .string()
    .nonempty({message: "A confirmação da senha não pode estar vazia"})
    .min(6, {message: "Use pelo menos 6 caracter"})
    .max(12, {message: "Use no máximo  12 caracter"})
})
.refine(({ senha, confirmSenha }) => senha === confirmSenha, {
    message: "Senhas não combinam",
    path: ["confirmSenha"]
})

export const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    function onRegister(data){
        console.log(data)
        reset()
        
    }


  return (
    <Card>
      <div>
        <h1>Register</h1>

        <Form onSubmit={handleSubmit(onRegister)}>
          <div>
            <Input {...register("username", {maxLength: 20})} type="text" required 
            placeholder="Username" />
            <p>{errors.username?.message}</p>
          </div>

          <div>
            <Input {...register("email")} type="email" required placeholder="E-mail" />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <Input {...register("senha")} type="password" required placeholder="Senha" />
            {errors.senha && <p>{errors.senha.message}</p>}
          </div>

          <div>
            <Input {...register("confirmSenha")} type="password" required placeholder="Confirmar senha" />
            {errors.confirmSenha && <p>{errors.confirmSenha.message}</p>}
          </div>

          <article>
            <Button type="submit">Cadastrar</Button>
            <p><Link to="/">Faça login</Link></p>
          </article>
        </Form>
        
      </div>
    </Card>
  );
};
