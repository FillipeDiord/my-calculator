import { useState } from "react";
import { Box, Button, Grid2, TextField } from "@mui/material";
import { evaluate, sqrt } from "mathjs";

export const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === '√') {
      try {
        setInput(sqrt(parseFloat(input)).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const handleEqual = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    try {
      setInput("");
    } catch {
      setInput("Error");
    }
  };

  return (
    <Box>
      <TextField value={input} disabled fullWidth variant="outlined" />
      <Grid2 container spacing={1} margin={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <Grid2 size={3} key={num}>
            <Button
              variant="contained"
              onClick={() => handleClick(num.toString())}
            >
              {num}
            </Button>
          </Grid2>
        ))}
      </Grid2>
      <Grid2
        container
        spacing={2}
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Grid2 display="flex" gap={1}>
          <Button variant="contained" onClick={() => handleClick("+")}>
            +
          </Button>
          <Button variant="contained" onClick={() => handleClick("-")}>
            -
          </Button>
        </Grid2>
        <Grid2 display="flex" gap={1}>
          <Button variant="contained" onClick={() => handleClick("/")}>
            /
          </Button>
          <Button variant="contained" onClick={() => handleClick("√")}>
            √
          </Button>
        </Grid2>
        <Grid2 display="flex" gap={1}>
          <Button variant="contained" onClick={handleEqual}>
            =
          </Button>
          <Button variant="contained" onClick={handleClear}>
            CE
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};
