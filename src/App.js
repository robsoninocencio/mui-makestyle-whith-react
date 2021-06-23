import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  buttonStyle: {
    color: "red",
    border: "none"
  },
  textStyle: {
    color: "green"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <Button className={classes.buttonStyle}>Small button</Button>
      <h1 className={classes.textStyle}>Um texto qualquer</h1>
    </>
  );
}

