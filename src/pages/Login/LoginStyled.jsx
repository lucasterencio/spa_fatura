import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  width: 400px;
  height: 450px;
  border-radius: 7px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  h1 {
    margin-top: 50px;
    text-align: center;
  }

  div{
    width: 100%;
    height: 100%;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 100px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  article{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    p{
        font-size: 18px;

    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border-radius: 0 7px 7px 0;
  border: none;
  border-left: 2px solid black;
  font-size: 16px;
  padding-left: 8px;
`;

export const Button = styled.button`

  text-align: center;
  width: 50%;
  height: 35px;
  border: 0;
  border-radius: 7px;
  cursor: pointer;

`  
