// import axios from "axios"
// import type { LoginFormValues, LoginResponse } from "./type"

// // API function for login using Axios
// export async function loginUser(data: LoginFormValues): Promise<LoginResponse> {
//   try {
//     const response = await axios.post<LoginResponse>("http://localhost:4000/login", data)
//     console.log(response);
//     return response.data
//   } catch (error: any) {
//     if (error.response) {
//       // The server responded with a status other than 2xx
//       throw new Error(error.response.data?.error || "Login failed")
//     } else if (error.request) {
//       // The request was made but no response received
//       throw new Error("No response from server. Please check your connection.")
//     } else {
//       // Something else happened
//       throw new Error(error.message || "An unexpected error occurred")
//     }
//   }
// }







import axios from "axios"
import type { LoginFormValues, LoginResponse } from "./type"

// API function for login using Axios
export async function loginUser(data: LoginFormValues): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>("http://localhost:4000/login", data)
  console.log(response)
  return response.data
}
