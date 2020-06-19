import { NextPage } from "next";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const ClockTitle = styled.p`
  font-size: 35px;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ClockComponent: NextPage = () => {
  const [time, setTime] = useState(
    new Date().toString().split("2020 ")[1].split(" GMT")[0]
  );

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toString().split("2020 ")[1].split(" GMT")[0]);
    }, 1000);
  }, [time]);

  return <ClockTitle>{time}</ClockTitle>;
};

export default ClockComponent;
