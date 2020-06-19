import Link from "next/link";
import { NextPage } from "next";
import { useEffect } from "react";
import { FaWifi, FaCat, FaTv } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { FiLogOut, FiVideo } from "react-icons/fi";
import { MdLocalMovies } from "react-icons/md";

import { Clock } from "~/components";
import { Auth } from "~/services/auth";
import api from "~/services/api";

import {
  Container,
  BottomInformations,
  BottomInformationText,
  Logo,
  Box,
  Options,
} from "~/page-styles/dashboard";

const Dashboard: NextPage = () => {
  useEffect(() => {
    api.get("/me").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <FiLogOut
        size={50}
        color="white"
        style={{ position: "absolute", top: 20, right: 20, cursor: "pointer" }}
        onClick={() => Auth.logout()}
      />
      <Link href="/app">
        <Logo src="https://cdn.discordapp.com/attachments/698506357086748772/723123317179154542/catt_branco.png" />
      </Link>
      <Clock />
      <Options>
        <Box>
          <FaTv size={140} />
        </Box>
        <Box>
          <MdLocalMovies size={180} />
        </Box>
        <Box>
          <FiVideo size={140} />
        </Box>
      </Options>
      <BottomInformations>
        <BottomInformationText>
          <FaWifi size={25} color="green" style={{ marginRight: 10 }} />
          Sinal de rede
        </BottomInformationText>
        <BottomInformationText>
          <FaCat size={25} color="yellow" style={{ marginRight: 10 }} /> Olá,
          Cookie
        </BottomInformationText>
        <BottomInformationText>
          <RiTimeLine size={25} color="orange" style={{ marginRight: 10 }} />
          Tempo restantes, 30 dias
        </BottomInformationText>
      </BottomInformations>
    </Container>
  );
};

export default Dashboard;
