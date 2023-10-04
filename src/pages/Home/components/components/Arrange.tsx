import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Arrange({ filter, setFilter}: Props) {
  //   const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

//   console.log(typeof age);

  return (
    <Box sx={{ width: "120px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value="3">None</MenuItem>
          <MenuItem value="1">Low to High</MenuItem>
          <MenuItem value="2">High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
