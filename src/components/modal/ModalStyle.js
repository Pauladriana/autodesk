import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

export const ModalWrapper = styled(Box)`
  width: 100%;
  min-height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 99;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled(Box)`
  width: 40vw;
  height: fit-content;
  position: absolute;
  background-color: #fff;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }

  @media (max-width: 1200px) {
    width: 60vw;
    top: 40%;
  }

  @media (max-width: 750px) {
    width: 80vw;
    top: 50%;

    p {
      font-size: 1rem;
    }
  }
`;

export const ModalHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem
`;
