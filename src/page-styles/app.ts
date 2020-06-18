import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #7156CB 0%, #A552C4 95.83%);

  img{
    margin-top: -120px;
    width: 500px;
    height: 500px;
  }

  button {
    width: 240px;
    height: 50px;
    background: #FF416E;
    border-radius: 8px;
    color: white;
    font-size: 19px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-family: "Inter", sans-serif;
    outline: none;
      transition: transform 150ms ease-out, font-size 150ms ease-out;


    &:hover {
      transform: scale(1.03);
    }
    &:active {
      transform: scale(1);
    }
  }

  figure{ 
    width: 270px;
    height: 60px;
    cursor: pointer;
    perspective: 500px;
    -webkit-perspective: 500px;
  
    div{
      height: 100%;
      transform-style: preserve-3d;
      -webkit-transform-style: preserve-3d;
      transition: 0.25s;
      -webkit-transition: 0.25s;
      
      span{
        width: 100%;
        height: 100%;
        position: absolute;
        box-sizing: border-box;
        border: 5px solid #FF416E;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        line-height: 50px;
        font-size: 17pt;
        text-align: center;
        text-transform: uppercase;
      
        &:nth-child(1){
          color: #FFF;
          transform: translate3d(0, 0, 30px);
          -webkit-transform: translate3d(0, 0, 30px);
        }
        
        &:nth-child(2){
          background: #FF416E;
          transform: rotateX(90deg) translate3d(0, 0, 30px);
          -webkit-transform: rotateX(90deg) translate3d(0, 0, 30px);
        
        }
        
      }

      &:hover{
        transform: rotateX(-90deg);
      }
    }
  }
`;