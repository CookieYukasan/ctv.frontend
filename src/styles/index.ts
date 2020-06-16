import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2f163d;
`;

export const MainContainer = styled.div`
  position: relative;
  width: 35vw;
  height: 35vh;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  font-family: "Source Sans Pro", sans-serif;
`;

export const Logo = styled.img`
  margin-top: -190px;
  width: 350px;
  height: 350px;
`;

interface IButtonProps {
  success?: boolean;
}

export const Button = styled.button<IButtonProps>`
  width: 150px;
  height: 40px;
  background: ${(props) => (props.success ? "green" : "red")};
  color: white;
  font-size: 19px;
  border-radius: 3px;
  border: none;
  position: absolute;
  bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  outline: none;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 150px;
  height: 65px;
`;

interface InputLabelProps {
  focus: boolean;
}

export const InputLabel = styled.label<InputLabelProps>`
  position: absolute;
  left: 0;
  top: 0;
  color: #999;
  background-color: #fff;
  font-size: 14px;
  z-index: 10;
  cursor: text;
  transition: transform 150ms ease-out, font-size 150ms ease-out;

  ${(props) =>
    props.focus
      ? css`
          transform: translateY(-100%);
          color: #2f163d;
        `
      : null}
`;

export const Input = styled.input`
  width: 100%;
  height: 15px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 2px;
  border-bottom-color: #808080;
  border-bottom-style: solid;
  outline: none;

  &:focus {
    font-weight: bold;
    border-bottom-color: #2f163d;

    label {
      top: -15px;
    }
  }
`;

export const PaymentMethods = styled.img`
  margin-top: 30px;
  margin-bottom: -100px;
`;
