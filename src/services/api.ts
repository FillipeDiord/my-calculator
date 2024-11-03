import { UserProps } from "../interfaces/UserProps";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080";

export async function createUser({ userName, password }: UserProps) {
  try {
    const user = {
      userName,
      password,
    };

    const optionsRequest = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${API_URL}/auth/register`, optionsRequest);

    if (response.status === 200 || response.status === 201) {
      await response.json();
      toast.success("Usuário criado com sucesso!");

      return;
    }

    throw new Error();
  } catch (error) {
    console.log("Error creating a user", error);
    toast.error("Error creating a user");
  }
}

export async function login({ userName, password }: UserProps) {
  try {
    const user = {
      userName,
      password,
    };

    const optionsRequest = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${API_URL}/auth/login`, optionsRequest);
    
    if (response.status === 200 || response.status === 201) {
      return await response.json();
    }

    throw new Error(`An error occurred while logging in: ${response.statusText}`);
  } catch (error) {
    console.log("An error occurred while logging in", error);
  }
}
