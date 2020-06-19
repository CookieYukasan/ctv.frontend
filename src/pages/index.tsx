import { useState } from "react";
import Router from "next/router";

import api from "~/services/api";
import * as auth from "~/services/auth";

import {
  Container,
  Logo,
  MainContainer,
  Button,
  Input,
  WarningBar,
  WarningText,
  PasswordErrorText,
} from "~/page-styles/index";

interface IErrorProps {
  message?: string;
  field?: string;
}

interface ICredentialsProps {
  username: string;
  password: string;
}

export default function Home() {
  const [error, setError] = useState<IErrorProps>({});
  const [credentials, setCredentials] = useState<ICredentialsProps>({
    username: "",
    password: "",
  });

  async function handleLogin() {
    const response = await api.post("/sessions", {}, { auth: credentials });
    if (response.status === 201) {
      auth.login(response.data.token);
      Router.push("/dashboard");
    } else {
      setError(response.data);
    }
  }

  return (
    <Container>
      <MainContainer>
        <Logo src="https://cdn.discordapp.com/attachments/698506357086748772/722231466666360912/logo2.png" />
        <WarningBar>
          <WarningText>Qualquer problema entre em contato conosco!</WarningText>
        </WarningBar>
        <Input
          passFailed={false}
          placeholder="Usuário"
          type="text"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({
              username: e.target.value,
              password: credentials.password,
            })
          }
        />
        <Input
          passFailed={error.field === "password" ? true : false}
          placeholder="Senha"
          type="password"
          value={credentials.password}
          onChange={(e) => {
            error.field === "password" && setError({});
            setCredentials({
              username: credentials.username,
              password: e.target.value,
            });
          }}
        />
        {error.field === "password" && (
          <PasswordErrorText>{error.message}</PasswordErrorText>
        )}
        <Button onClick={handleLogin}>Entrar</Button>
      </MainContainer>
    </Container>
  );
}
