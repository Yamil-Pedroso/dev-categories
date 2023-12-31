import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Container,
  InputWrapper,
  Input,
  LoginBtn,
  RegisterBtn,
  LoginRegisterWrapper,
  RegisterWrapper,
  RegisterIcon,
  Title,
} from './styles'
import { UseAuth } from '../../hook/AuthContext'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = UseAuth()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    register(name, email, password)
    navigate('/')

    setName('')
    setEmail('')
    setPassword('')

    alert('User registered successfully!')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const image = reader.result as any
        localStorage.setItem('profilePicture', image)
      }
    }
    reader.readAsDataURL(e.target.files![0])
  }

  return (
    <Container>
      <RegisterWrapper>
        <RegisterIcon />
      </RegisterWrapper>
      <Title>
        <span>User</span> Register
      </Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="file"
            placeholder="Profile Picture"
            id="customFile"
            accept="images/*"
            onChange={onChange}
          />
        </InputWrapper>
        <LoginRegisterWrapper>
          <RegisterBtn type="submit">REGISTER</RegisterBtn>

          <LoginBtn>
            <Link to="/login">Login</Link>
          </LoginBtn>
        </LoginRegisterWrapper>
      </form>
    </Container>
  )
}

export default RegisterForm
