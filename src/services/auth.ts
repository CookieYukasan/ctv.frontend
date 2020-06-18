export const TOKEN_KEY = "@CatV-Token"; 
export const isAuthenticated = (): boolean => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);
export const login = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
