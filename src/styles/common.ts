import styled from "@emotion/styled";
import { ButtonGroup } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export const CenteredColumnGrid = styled(Grid2)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

export const GappedButtonGroup = styled(ButtonGroup)(() => ({
  display: "flex",
  gap: 6,
}));
