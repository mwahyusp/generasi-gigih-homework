import React from "react";
import Search from "./style.module.css";
import { TextField,Button } from '@material-ui/core';


function Index({ handleSubmit }) {
  return (
    <form className={Search.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="Search Song.." variant="outlined" className={Search.input} type="text" name="query" placeholder="Search Song.."/>
      <Button variant="contained" className={Search.btn} type="submit">Search</Button>
    </form>
  );
}

export default Index;
