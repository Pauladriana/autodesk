import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

export const InputsContainer = styled(Box)`
  height: 23rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 28%;
  margin: auto;

  @media (max-width: 1200px) {
    height: 25rem;
    padding: 0 30%;
  }

  @media (max-width: 750px) {
    padding: 0 15%;
  }

  .errorMessage {
    color: red;
    font-size: 0.8rem;
    margin: 5px 0 1rem 0.5rem;
  }
`;

