import { useState } from "react";

import api from '~/services/api';

import {
  Container,
  Logo,
  MainContainer,
  Button,
  Input,
  WarningBar,
  WarningText,
} from "~/page-styles/index";

interface ICredentialsProps {
  username: string;
  password: string;
}

export default function Home() {
  const [credentials, setCredentials] = useState<ICredentialsProps>({
    username: 'Cookie Yukasan',
    password: 'teste'
  });

  function handleLogin(){
    api.post('/users', {}, {
      auth: credentials
    })
  }

  return (
    <Container>
      <MainContainer>
        <Logo src="https://cdn.discordapp.com/attachments/698506357086748772/722231466666360912/logo2.png" />
        <WarningBar>
          <WarningText>Qualquer problema entre em contato conosco!</WarningText>
        </WarningBar>
        <Input placeholder="Usuário"
          type="text"
          value={credentials.username}
          
        />
        <Input
          placeholder="Senha"
          type="password"
          value={credentials.username}
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </MainContainer>
    </Container>
  );
}
