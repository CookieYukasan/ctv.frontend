import React from 'react';

import {
  Container,
} from "~/page-styles/app";

const AppPage: React.FC = () => {
  return(
    <Container>
      <img src="https://cdn.discordapp.com/attachments/698506357086748772/723123317179154542/catt_branco.png" />
      <button>DOWNLOAD</button>
      {/*<figure>
        <div>
          <span>Download</span>
          <span>CaTV v0.1</span>
        </div>
      </figure>*/}
    </Container>
  )
}

export default AppPage;