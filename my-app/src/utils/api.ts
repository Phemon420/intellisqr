import axios from "axios"
import type { LoginFormValues, LoginResponse } from "./type"

// API function for login using Axios

const Url : string = import.meta.env.VITE_API_URL || "http://localhost:4000";
export async function loginUser(data: LoginFormValues): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>(Url+"/login", data)
  console.log(response)
  return response.data
}
