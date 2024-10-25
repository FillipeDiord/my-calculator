import { UserProps } from "../interfaces/UserProps";

const API_URL = "http://localhost:8080/api";

export async function createUser({ userName, password }: UserProps) {
  try {
    const user = {
      userName,
      password,
    };

    const optionsRequest = {
      method: "POST",
      body: JSON.stringify(user),
    };

    const response = await fetch(`${API_URL}/auth/register`, optionsRequest);

    if (response.status === 400) {
      
    }



  } catch (error) {
    console.log("Error creating a user", error);
  }
}
