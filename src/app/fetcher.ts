import { AuthActions } from "../app/auth/utils";

const baseUrl = "http://localhost:8000";

const { getToken } = AuthActions();

const api = async (url: string, options: RequestInit = {}): Promise<Response> => {
  const token = getToken("token");

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(`${baseUrl}${url}`, options);
  return response;
};

export const fetcher = async (url: string): Promise<any> => {
  const response = await api(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
