export const isAuthenticated = () => localStorage.getItem("user") ? true : false;

export const login = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
  window.dispatchEvent(new Event("authChange"));
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("authChange"));
};
