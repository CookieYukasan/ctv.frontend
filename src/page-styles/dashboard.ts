import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #7156cb 0%, #a552c4 95.83%);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

export const Logo = styled.img`
  width: 23em;
  height: 42vh;
  cursor: pointer;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 170px;
  height: 154px;
  border: 2px solid white;
  border-radius: 10px;
  margin: 45px 20px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.37);
  color: white;
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

export const BottomInformations = styled.div`
  width: 85%;
  height: 15px;
  padding: 20px;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  background: #b85eda;
  border-radius: 13px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const BottomInformationText = styled.p`
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
`;
