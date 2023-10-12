import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTopButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={scrollToTop}
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    >
      <KeyboardArrowUpIcon />
    </Button>
  );
};

export default ScrollToTopButton;
