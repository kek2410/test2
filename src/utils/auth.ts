import Cookie from "cookie-ts";

const TokenKey = "Penta-Token";

export function getToken(): any {
  return Cookie.get(TokenKey);
}

export function setToken(token: string): any {
  return Cookie.set(TokenKey, token, Number(new Date()));
}

export function removeToken(): any {
  return Cookie.clear(TokenKey);
}
