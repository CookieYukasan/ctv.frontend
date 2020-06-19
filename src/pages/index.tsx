import { NextPage } from "next";
import { useState } from "react";
import Router from "next/router";

import { AlwaysLogged } from "~/components";
import api from "~/services/api";
import { Auth } from "~/services/auth";

import {
  Container,
  Logo,
  MainContainer,
  Button,
  Input,
  WarningBar,
  WarningText,
  InputErrorText,
} from "~/page-styles/index";

interface IErrorProps {
  message?: string;
  field?: string;
  validation?: string;
}

interface ICredentialsProps {
  username: string;
  password: string;
}

interface HomeProps {
  isLogged: boolean;
}

const Home: NextPage<HomeProps> = ({ isLogged }) => {
  const [error, setError] = useState<IErrorProps>({});
  const [credentials, setCredentials] = useState<ICredentialsProps>({
    username: "",
    password: "",
  });

  if (isLogged) return <AlwaysLogged />;

  async function handleLogin() {
    const response = await api.post("/sessions", {}, { auth: credentials });
    if (response.data.token) {
      Auth.login(response.data.token);
      Router.push("/dashboard");
    } else {
      setError(response.data[0]);
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
          userFailed={error.field === "username" ? true : false}
          placeholder="Usuário"
          type="text"
          value={credentials.username}
          onChange={(e) => {
            error.field === "username" && setError({});
            setCredentials({
              username: e.target.value,
              password: credentials.password,
            });
          }}
        />
        {error.field === "username" && (
          <InputErrorText error={error.field}>{error.message}</InputErrorText>
        )}
        <Input
          passFailed={error.field === "password" ? true : false}
          userFailed={false}
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
          <InputErrorText error={error.field}>{error.message}</InputErrorText>
        )}
        <Button onClick={handleLogin}>Entrar</Button>
      </MainContainer>
    </Container>
  );
};

Home.getInitialProps = async () => {
  const auth = await Auth.getToken();
  const isLogged = auth !== undefined ? true : false;

  return { isLogged };
};

export default Home;
