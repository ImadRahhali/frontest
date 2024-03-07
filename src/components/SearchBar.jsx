import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      console.log("Navigating to Search URL - ", `/search/${searchTerm}`);
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <Stack
    direction="row"
    alignItems="center" 
    sx={{
      flexDirection: { md: "row" },
      overflowX: "auto",
    }}
  >
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 30 },
      }}
    >
      <input
        className="search-bar"
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
        placeholder="Search Here..."
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#A367B1" }}>
        <Search />
      </IconButton>      
    </Paper>
    <Stack
        direction="row"
        alignItems="center" 
      sx={{
        flexDirection: { md: "row" },
        overflowX: "auto",
        mr: { sm: 10 },
      }}
    >
      <AccountCircleIcon sx={{ fontSize: 50,color:"#392467"}}></AccountCircleIcon>
      <Typography sx={{color:"#392467",fontWeight:"bold",marginLeft:2}}>Hello Rida!</Typography>
    </Stack>
  </Stack>
  

  );
};

export default SearchBar;
