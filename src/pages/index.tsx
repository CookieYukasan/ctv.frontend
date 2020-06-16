import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import {
  Container,
  Logo,
  MainContainer,
  Button,
  Input,
  FormContainer,
  InputContainer,
  InputLabel,
  PaymentMethods,
} from "./styles";

export default function Home() {
  const [state, setState] = useState(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);
  const [passFocus, setPassFocus] = useState<boolean>(false);

  return (
    <Container>
      <MainContainer>
        <Logo src="https://cdn.discordapp.com/attachments/698506357086748772/722231466666360912/logo2.png" />
        <FormContainer>
          <InputContainer>
            <InputLabel focus={userFocus} htmlFor="user-input">
              USUÁRIO
            </InputLabel>
            <Input
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              id="user-input"
            />
          </InputContainer>
          <InputContainer>
            <InputLabel focus={passFocus} htmlFor="password-input">
              SENHA
            </InputLabel>
            <Input
              id="password-input"
              onFocus={() => setPassFocus(true)}
              onBlur={() => setPassFocus(false)}
            />
          </InputContainer>
        </FormContainer>
        {state ? (
          <Button
            success={state}
            onClick={() => {
              setState(state ? false : true);
            }}
          >
            LOGADO <FaCheck size={15} color="white" />
          </Button>
        ) : (
          <Button
            success={state}
            onClick={() => {
              setState(state ? false : true);
            }}
          >
            NEGADO <MdClose size={25} color="white" />
          </Button>
        )}
      </MainContainer>
      <PaymentMethods src="https://cdn.discordapp.com/attachments/698506357086748772/722284446652301312/pagamento.png" />
    </Container>
  );
}
