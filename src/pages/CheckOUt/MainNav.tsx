import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function MainNav() {
  const [value, setValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    console.log(e);
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="Tabs example" onChange={handleChange}>
            <Tab label="Tab One" value="1" />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="1"></TabPanel>
      </TabContext>
    </div>
  );
}
