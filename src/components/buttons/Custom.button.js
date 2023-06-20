import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons(props) {
  return (
    <Button
      onClick={props.onClick}
      sx={props.sx}
      variant={props.variant}
      color={props.color}
      size={props.size}
    >
      {props.children}
    </Button>
  );
}
