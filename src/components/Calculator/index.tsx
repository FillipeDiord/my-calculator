import { useState } from "react";
import { Box, Button, Grid2, InputBase } from "@mui/material";
import { evaluate, sqrt } from "mathjs";

export const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "√") {
      try {
        setInput(sqrt(parseFloat(input)).toString());
      } catch {
        setInput("Error");
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
    <Box
      sx={{
        minWidth: 250,
        maxWidth: 400,
        bgcolor: "#b7b8b9",
        border: "2px solid #0a0a0a",
        borderRadius: 1,
        padding: 2,
      }}
    >
      <InputBase
        sx={{
          bgcolor: "#FFFFFF",
          border: "2px solid #0a0a0a",
          borderRadius: 2,
          padding: 1,
          height: 60,
          color: "#033261",
          pointerEvents: "none",
          userSelect: "none",
          fontWeight: 600,
        }}
        value={input}
        inputProps={{ style: { textAlign: "center" } }}
        fullWidth
        defaultValue={0}
      />
      <Grid2 container spacing={1} margin={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Grid2 size={4} key={num}>
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
        size={2}
        alignContent="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Grid2 display="flex" gap={6} margin={2}>
          <Grid2>
            <Button variant="contained" onClick={() => handleClick("0")}>
              0
            </Button>
          </Grid2>
          <Grid2>
            <Button variant="contained" onClick={() => handleClick("+")}>
              +
            </Button>
          </Grid2>
          <Grid2>
            <Button variant="contained" onClick={() => handleClick("-")}>
              -
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 display="flex" gap={6} margin={2}>
          <Grid2>
            <Button variant="contained" onClick={() => handleClick("/")}>
              /
            </Button>
          </Grid2>
          <Grid2>
            <Button variant="contained" onClick={() => handleClick("√")}>
              √
            </Button>
          </Grid2>
          <Grid2>
            <Button variant="contained" onClick={handleEqual}>
              =
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
      <Button variant="contained" onClick={handleClear}>
        CE
      </Button>
    </Box>
  );
};
