import React from "react";
import { Box, Rating, Typography } from "@mui/material";

interface EvaluationProps {
  value: number;
  name: string;
}

const Evaluation = ({ value, name }: EvaluationProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mt: "2vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          minWidth: "150px",
        }}
      >
        <Typography component="legend">{name}</Typography>
      </Box>
      <Box>
        <Rating
          name={name}
          value={value}
          precision={0.5}
          readOnly
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#517f36",
            },
            "& .MuiRating-iconHover": {
              color: "#517f36",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Evaluation;
