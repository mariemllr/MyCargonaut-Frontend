import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  UserState,
  setBirthday,
  setFirstName,
  setLastName,
  setNote,
  setSmoker,
} from "../../../reducer/user";
import UserAvatar from "../../UserAvatar/UserAvatar";
import Evaluation from "../../Evaluation/Evaluation";
import uploadImage from "../../../utility/UploadImage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DatePicker } from "@mui/x-date-pickers";
import rest from "../../../utility/rest";

interface ProfileInformationProps {
  user: UserState;
}

const ProfileInformation: React.FC<ProfileInformationProps> = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    const { firstName, lastName, birthday, smoker, note } = user;
    const updatedUser = {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
      ...(birthday && { birthday }),
      ...(smoker && { smoker }),
      ...(note && { note }),
    };
    setEditing(false);
    try {
      const response = await rest.put("/profile", updatedUser);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = () => {
    uploadImage(user.image);
  };

  return (
    <Box
      sx={{
        border: "1.5px solid black",
        borderRadius: "1px",
        width: "100%",
        p: "3vh",
      }}
    >
      <Grid2 container>
        <Grid2 xs={7}>
          <Box
            sx={{
              border: "1.5px solid #e2f0d9",
              borderRadius: "1px",
              width: "100%",
              p: "2vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <strong>Vorname:</strong>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        {editing ? (
                          <Input
                            value={user.firstName}
                            onChange={(e) =>
                              dispatch(setFirstName(e.target.value))
                            }
                          />
                        ) : (
                          user.firstName
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          onClick={handleEdit}
                          sx={{ mr: 1 }}
                        >
                          Edit
                        </Button>
                        {editing && (
                          <Button variant="contained" onClick={handleSave}>
                            Save
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Nachname:</strong>
                  </TableCell>
                  <TableCell>
                    {editing ? (
                      <Input
                        value={user.lastName}
                        onChange={(e) => dispatch(setLastName(e.target.value))}
                      />
                    ) : (
                      user.lastName
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Geburtstag:</strong>
                  </TableCell>
                  <TableCell>
                    {editing ? (
                      <DatePicker
                        label="Geburtstag"
                        value={user.birthday ?? null}
                        onChange={(date) => {
                          if (date !== null) {
                            dispatch(setBirthday(date));
                          }
                        }}
                      />
                    ) : (
                      "date"
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Raucher:</strong>
                  </TableCell>
                  <TableCell>
                    {editing ? (
                      <FormControl fullWidth>
                        <InputLabel>Raucher</InputLabel>
                        <Select
                          value={user.smoker ? "true" : "false"}
                          label="Raucher"
                          onChange={(e) =>
                            dispatch(setSmoker(e.target.value === "true"))
                          }
                        >
                          <MenuItem value={"true"}>Ja</MenuItem>
                          <MenuItem value={"false"}>Nein</MenuItem>
                        </Select>
                      </FormControl>
                    ) : user.smoker ? (
                      "Ja"
                    ) : (
                      "Nein"
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Anzahl Fahrten:</strong>
                  </TableCell>
                  <TableCell>{user.rideCount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <strong>Notiz:</strong>
                  </TableCell>
                  <TableCell>
                    {editing ? (
                      <TextField
                        label="Notiz"
                        multiline
                        rows={4}
                        defaultValue={user.note}
                        onChange={(e) => {
                          dispatch(setNote(e.target.value));
                        }}
                      />
                    ) : (
                      user.note
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grid2>
        <Grid2 xs={5}>
          <UserAvatar
            onChange={handleImageChange}
            lastName={user.lastName}
            image={user.image}
          ></UserAvatar>
        </Grid2>
        <Grid2 xs={12}>
          <Evaluation value={4} name={"Beifahrerbewertung"}></Evaluation>
        </Grid2>
        <Grid2 xs={12}>
          <Evaluation value={3.5} name={"Fahrerbewertung"}></Evaluation>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ProfileInformation;
