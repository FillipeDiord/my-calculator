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

    debugger;

    if (response.status === 200 || response.status === 201) {
      const result = await response.json();

      debugger;

      console.log('=========== RESULTADO DA MERDA', result);
      // return 
    }

  } catch (error) {
    console.log("Error creating a user", error);
  }
}
