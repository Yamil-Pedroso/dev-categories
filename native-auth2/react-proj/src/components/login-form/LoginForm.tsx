import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../../hook/AuthContext';
import { Link } from 'react-router-dom';


// Styled Components
import { Container, Input, InputWrapper, LoginBtn, LoginRegisterWrapper, UserWrapper, UserIcon, RegisterBtn, Title, ForgotPasswordText } from './styles';

const LoginForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = UseAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     login(name, email, password);
     navigate('/');
     console.log("You are successfully logged in!", name, email, password);
  };
   

  return (
    <Container>
      <UserWrapper>
        <UserIcon />
      </UserWrapper>
        <Title><span>User</span> Login</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
             type="text" 
             value={name} 
             placeholder='Name'
             onChange={(e) => setName(e.target.value)} 
            />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email" 
            value={email} 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} 
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password" 
            value={password} 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} 
          />
        </InputWrapper>
        <LoginRegisterWrapper>
          <LoginBtn type="submit" >
            LOGIN
          </LoginBtn>
          <RegisterBtn>
            <Link to="/register">Register</Link>
          </RegisterBtn>
        </LoginRegisterWrapper>
      </form>
      <ForgotPasswordText>
        <Link to="/forgot-password">Forgot Password?</Link>
      </ForgotPasswordText>
    </Container>
  );
};

export default LoginForm;
