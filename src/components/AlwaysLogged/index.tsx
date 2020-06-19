import { NextPage } from "next";
import { useState, useEffect } from "react";
import Router from "next/router";

import {
  Container,
  Logo,
  MainContainer,
  WarningBar,
  WarningText,
} from "~/page-styles/index";

import { Title, Time } from "./styles";

const AlwaysLogged: NextPage = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time <= Math.floor(Math.random() * (25 - 8 + 1)) + 8) {
      setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    } else {
      Router.push("/dashboard");
    }
  }, [time]);

  return (
    <Container>
      <MainContainer>
        <Logo src="https://cdn.discordapp.com/attachments/698506357086748772/722231466666360912/logo2.png" />
        <WarningBar>
          <WarningText>Qualquer problema entre em contato conosco!</WarningText>
        </WarningBar>

        <Title>Verificamos uma autenticação recente!</Title>
        <Title>Você está sendo conectado ao nosso servidor...</Title>
        <Time>0:{time.toString().length < 2 ? `0${time}` : time}</Time>
      </MainContainer>
    </Container>
  );
};

export default AlwaysLogged;
