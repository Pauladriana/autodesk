import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";


export const HeaderDetailsItem = styled(Box)`
  height: fit-content;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: blue;
    font-family: 'Roboto', sans-serif;
  }
`;

export const TitleDetailsItem = styled(Box)`
  margin: auto;
  height: fit-content;
  width: fit-content;

  p {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export const DescriptionDetailsItem = styled(Box)`
  margin: auto;
  height: fit-content;
  width: 80%;
`;

export const ContainerDetailsItem = styled(Box)`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;