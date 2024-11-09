import { useEffect, useState } from "react";
import { Button, Container, Box, InputBase } from "@mui/material";
import { Calculator } from "../components/Calculator";
import { useNavigate } from "react-router-dom";
import { currentBalance, generateRandomString } from "../services/api";

export function HomePage() {
  const navigate = useNavigate();
  const [currentBalanceValue, setCurrentBalanceValue] = useState(0);
  const [randomString, setRandomString] = useState("");
  const [inputValue, setInputValue] = useState("");

  const getRandomString = async () => {
    const result = await generateRandomString();

    if (result) {
      setRandomString(result);
      return;
    }

    return;
  };

  const handleInputChange = (value: string) => { 
    setInputValue(value); 
  };

  useEffect(() => {
    const getCurrentBalance = async () => {
      const balance = await currentBalance();
      setCurrentBalanceValue(balance);
    };
    getCurrentBalance();
  }, [randomString, inputValue]);

  return (
    <>
      <Container style={{ width: "100%", marginBottom: 20 }}>
        <Box
          style={{
            display: "flex",
            width: "100%",
            gap: 20,
            justifyContent: "space-between",
          }}
        >
          <InputBase
            sx={{
              bgcolor: "#FFFFFF",
              border: "2px solid #0a0a0a",
              borderRadius: 2,
              padding: 1,
              height: 40,
              color: "#033261",
              pointerEvents: "none",
              userSelect: "none",
              fontWeight: 600, 
              justifyContent: "initial",
              maxWidth: 120
            }}
            value={currentBalanceValue}
            inputProps={{ style: { textAlign: "center" } }}
          />
          <Button variant="contained" onClick={() => navigate("/")}>
            Sair
          </Button>
        </Box>
      </Container>
      <Container>
        <Calculator onInputChange={handleInputChange}/>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            marginTop: 20,
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              maxWidth: 180,
            }}
          >
            <Button
              variant="contained"
              onClick={getRandomString}
              style={{ maxWidth: 144 }}
            >
              Gerar string
            </Button>
          </Box>
          <InputBase
            sx={{
              bgcolor: "#FFFFFF",
              border: "2px solid #0a0a0a",
              borderRadius: 2,
              padding: 1,
              height: 40,
              color: "#033261",
              pointerEvents: "none",
              userSelect: "none",
              fontWeight: 600,
              width: "100%",
            }}
            value={randomString}
            inputProps={{ style: { textAlign: "center" } }}
          />
        </Box>
      </Container>
    </>
  );
}
