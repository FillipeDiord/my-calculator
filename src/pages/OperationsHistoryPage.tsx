import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { operationsHistory } from "../mock/operationsHistory";
import "../styles/styles.css";

export function OperationsHistoryPage() {
  const navigate = useNavigate();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <>
      <Box style={{ display: "flex", paddingTop: 40, paddingLeft: 40, alignSelf: "flex-start" }}>
        <Button
          variant="contained"
          onClick={() => navigate("/home")}
          className="button"
        >
          Back
        </Button>
      </Box>
      <Container className="container">
        <List className="list">
          {operationsHistory.map((item) => (
            <ListItem key={item.id} className="listItem">
              <ListItemText primary={item.name} />
              <ListItemText secondary={formatDate(item.dateOperation)} />
              <ListItemText secondary={item.cost} />
              <ListItemButton>
                <ListItemIcon>
                  <DeleteIcon color="error" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
