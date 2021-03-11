import React from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import Spiner from '../assets/styles/animation/Spiner';

const Form = styled.form`
  padding: 16px 16px;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.5;
  }
`;
const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.5;
  }
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`;
const Error = styled.span`
  color: red;
  font-size: 14px;
`;
const Div = styled.div`
  text-align: center;
  display: block;
  height: 0;
  margin: 70px 0 70px 0;
  width: 100%;
`;

const UserForm = ({ title, onSubmit, loading, error }) => {
  const { inputs, handleChange } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };

  if (loading)
    return (
      <Div>
        <Spiner />
      </Div>
    );

  return (
    <Form method="POST" onSubmit={handleSubmit} disabled={loading}>
      <Title>{title}</Title>
      <Input
        type="email"
        name="email"
        placeholder="Email ..."
        disabled={loading}
        value={inputs.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Contaseña ..."
        type="password"
        name="password"
        value={inputs.password}
        disabled={loading}
        onChange={handleChange}
      />
      <div>
        <Button type="submit" disabled={loading}>
          {title}
        </Button>
      </div>
      {error && <Error>Ops.. Ocurrio algo tal vez ya estes registado</Error>}
    </Form>
  );
};

export default UserForm;
