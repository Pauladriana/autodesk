import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useForm } from "react-hook-form";

const CreateData = ({ closeModal }) => {
  const [currency, setCurrency] = React.useState("Select");
  const [type, setType] = React.useState("Select");
  const [priority, setPriority] = React.useState("Select");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(777, data);

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
  ];

  const types = [
    {
      value: "1a",
      label: "type 1",
    },
    {
      value: "2a",
      label: "type 2",
    },
  ];

  const priorities = [
    {
      value: "1",
      label: "Low",
    },
    {
      value: "2",
      label: "Normal",
    },
    {
      value: "3",
      label: "High",
    },
  ];

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        style={{
          height: 350,
          overflowY: "scroll",
          overflowX: "hidden",
          padding: "0 28%",
          margin: "auto",
        }}
      >
        <TextField
          {...register("spec_section")}
          id="outlined-select-currency"
          select
          label="Spec Section"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          {...register("sub_spec_section")}
          label="Sub spec section"
          defaultValue=""
        />

        <TextField
          {...register("title")}
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
        />

        <TextField
          {...register("description")}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
        />

        <TextField
          {...register("type")}
          required
          id="outlined-select-type"
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          {...register("priority")}
          required
          id="outlined-select-priority"
          select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {priorities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField {...register("package")} label="Package" defaultValue="" />

        <TextField {...register("due_date")} label="Due date" />
      </div>

      <Stack
        style={{
          display: "flex",
          justifyContent: "right",
          padding: "1rem",
        }}
        spacing={2}
        direction="row"
      >
        <Button variant="outlined" onClick={() => closeModal(false)}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateData;
