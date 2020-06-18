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
  background: linear-gradient(180deg, #7156CB 0%, #A552C4 95.83%);
`;

export const MainContainer = styled.div`
  position: relative;
  width: 40em;
  height: 27em;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  font-family: "Inter", sans-serif;

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
  width: 219px;
  height: 49px;
  background: #8155C9;
  border-radius: 8px;
  color: white;
  font-size: 19px;
  border: none;
  position: absolute;
  bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Inter", sans-serif;
  outline: none;
`;

export const Input = styled.input`
  width: 34em;
  height: 48px;
  border-radius: 5px;
  border: 0;
  outline: none;
  background: #F0F0F5;
  padding: 0px 15px 0px 15px;
  transition: transform 150ms ease-out, font-size 150ms ease-out;

  & + & {
    margin-top: 15px;
  }

  &:focus {
    transform: scale(1.05);
    background: #FFF;
    border: 1px solid #6B75FF;
    color: #2f163d;
  }
`;

export const WarningBar = styled.div`
  width: 28.4em;
  height: 48px;
  padding: 0px 15px 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255, 190, 79, 0.16);
  margin-top: -2em;
  margin-bottom: 19px;
  border-radius: 8px;

  @media (min-width: 3840px){
    width: 16vw;
  }
`

export const WarningText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #FFBE4F;
`