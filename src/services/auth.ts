import axios from "../lib/axios"

type LoginResponse = {
  token: string
  lifetime: number
  expires_at: string
}

export const mutateLogin = async ({ username, password, remember }: { username: string, password: string, remember: boolean }) => {
  const response = await axios.post<LoginResponse>("/security/auth_check", {
    _username: username,
    _password: password,
    _subdomain: "toko",
  })
  return response.data
}
