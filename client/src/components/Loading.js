import React from "react";
import { Box, CircularProgress } from "@mui/material";

class Loading extends React.Component {
  render() {
    return (
      <Box sx={{ display: "flex", width: "1080px", height: "1080px" }}>
        <CircularProgress
          style={{
            height: "100px",
            width: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "100px",
          }}
        />
      </Box>
    );
  }
}

export default Loading;
