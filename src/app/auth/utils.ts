import Cookies from "js-cookie";

const baseUrl = "http://localhost:8000";

export async function api(url: string, options: RequestInit = {}): Promise<Response> {
  const token = Cookies.get("token");
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return fetch(`${baseUrl}${url}`, options);
}

const storeToken = (token: string) => {
  Cookies.set("token", token);
};

const getToken = (type: string) => {
  return Cookies.get("token");
};

const removeToken = () => {
  Cookies.remove("token");
};

const register = (email: string, password: string) => {
    return api("/auth/sign-up/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
};
  
const login = (email: string, password: string) => {
    return api("/auth/sign-in/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
});
};
  
const logout = () => {
    const token = getToken("token");
    return api("/auth/sign-out/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
    });
};

const searchJobs = (query: string) => {
  const token = getToken("token");
  const url = `/jobs/search?query=${query}`;

  return api(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
};


  
export const AuthActions = () => {
    return {
      login,
      register,
      storeToken,
      getToken,
      logout,
      removeToken,
    };
};

export const JobActions = () => {
  return {
    searchJobs
  };
};