import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import arrow_right_icon from "../../assets/ICONS/arrow_right_icon.png";
import ModuleHeader from "../../components/ModuleHeader";
import rest from "../../utility/rest";

interface Request {
  startlocation: string;
  endlocation: string;
  date: Date;
  seats: number;
  weight?: number;
  mass_x?: number;
  mass_y?: number;
  mass_z?: number;
  smoking?: boolean;
  animals?: boolean;
  notes?: string;
}

const Gesuche: React.FC = () => {
  const [gesuche, setGesuche] = useState<Request[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await rest.get("request");
        const transformedRequests = response.data.map(
          (gesuch: { date: string | number | Date }) => {
            return { ...gesuch, date: new Date(gesuch.date) };
          }
        );
        setGesuche(transformedRequests);
      } catch (e) {
        console.error("An error occurred while fetching requests:", e);
      }
    };

    fetchRequests();
  }, []);

  return (
    <Box
      sx={{
        border: "1.5px solid black",
        borderRadius: "1px",
        backgroundColor: "white",
      }}
    >
      <ModuleHeader header={"Gesuche"} />
      <Box
        sx={{
          p: "3vh",
        }}
      >
        <form noValidate autoComplete="off">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={10} sm={2}>
              <FormControl
                fullWidth
                sx={{ border: "1px solid #ccc", borderRadius: "4px" }}
              >
                <TextField id="startort" label="Startort" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={1}>
              <img
                src={arrow_right_icon}
                alt="Arrow Icon"
                style={{
                  maxWidth: "50px",
                  height: "auto",
                }}
              />
            </Grid>
            <Grid item xs={10} sm={2}>
              <FormControl
                fullWidth
                sx={{ border: "1px solid #ccc", borderRadius: "4px" }}
              >
                <TextField id="zielort" label="Zielort" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl
                fullWidth
                sx={{ border: "1px solid #ccc", borderRadius: "4px" }}
              >
                <TextField
                  id="datum"
                  label="Datum"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button variant="contained" color="primary" type="submit">
                Suche
              </Button>
            </Grid>
          </Grid>
        </form>
        {gesuche.map((gesuch, index) => (
          <Grid
            container
            key={index}
            sx={{
              mb: "2vh",
              mt: "3vh",
              border: "2px solid green",
              borderRadius: "4px",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <Typography>{gesuch.startlocation}</Typography>
                  <Box>
                    <img
                      src={arrow_right_icon}
                      alt="Arrow Icon"
                      style={{
                        maxWidth: "50px",
                        height: "auto",
                      }}
                    />
                  </Box>
                  <Typography>{gesuch.endlocation}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    textAlign: "flex-start",
                  }}
                >
                  <Typography>
                    {gesuch.date?.toLocaleDateString() ?? "Date not available"}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              ></Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Gesuche;
