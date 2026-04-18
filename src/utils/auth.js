export const getToken = () => localStorage.getItem("token");

export const setAuth = (token, role, password) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
  localStorage.setItem("password", password);
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("password");
};

export const isAuthenticated = () => !!getToken();