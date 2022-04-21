import { useState } from "react";

import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { createItem } from "../../endpoints"

import { InputsContainer } from "./createItemStyle";

const CreateItem = ({ closeModal, addToItemsList }) => {
  const [specSection, setSpecSection] = useState("");
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const newItem = {
      ...data,
      status: "Open",
      rev: 0,
      response: "Pending",
      spec: data.subSpecSection ? `${data.subSpecSection} - ${data.specSection}` : data.specSection ? data.specSection : "--",
      title: data.title || "--",
      type: data.type || "--",
      priority: data.priority || "--",
      packages: data.packages || "--",
      dueDate: data.due_date || "--",
      subSpecSection: data.subSpecSection || "--",
      specSection: data.specSection || "--",

    }

    try {
      const res = await createItem(newItem);
      if (res.status) {
        addToItemsList(newItem);
        closeModal(false);
      }
    } catch (e) {
      console.log(e)
    }
  }

  const specSections = [
    {
      value: "a1",
      label: "Attachments",
    },
    {
      value: "a2",
      label: "Test Spec",
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
      <InputsContainer>
        <TextField
          {...register("specSection")}
          id="outlined-select-spec_section"
          select
          label="Spec Section"
          value={specSection}
          onChange={(e) => setSpecSection(e.target.value)}
        >
          {specSections.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          {...register("subSpecSection")}
          label="Sub spec section"
          defaultValue=""
        />

        <TextField
          {...register("title", { required: "This is required"})}
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
        />
        <p className="errorMessage">{errors.title?.message}</p>

        <TextField
          {...register("description")}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
        />

        <TextField
          {...register("type", { required: "This is required"})}
          required
          id="outlined-select-type"
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <p className="errorMessage">{errors.type?.message}</p>

        <TextField
          {...register("priority", { required: "This is required"})}
          required
          id="outlined-select-priority"
          select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {priorities.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <p className="errorMessage">{errors.priority?.message}</p>

        <TextField {...register("packages")} label="Package" defaultValue="" />

        <TextField {...register("dueDate")} label="Due date" />
      </InputsContainer>

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

export default CreateItem;
