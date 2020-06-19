import Cookie from "js-cookie";
import Router from "next/router";
import jwtDecode from "jwt-decode";

export type DecodedToken = {
  readonly email: string;
  readonly exp: number;
};

const TOKEN_STORAGE_KEY = "catv.token";

export class Auth {
  readonly decodedToken: DecodedToken;
  constructor(readonly token?: string) {
    this.decodedToken = { email: "", exp: 0 };
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {}
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isValid(): boolean {
    return !this.isExpired;
  }

  static getToken() {
    Cookie.set("name", "value");
    console.log("testandoooo", Cookie.get("name"));
    return Cookie.get(TOKEN_STORAGE_KEY);
  }

  static async login(token: string) {
    Cookie.set(TOKEN_STORAGE_KEY, token, { expires: 1 });
    await Router.push("/dashboard");
  }

  static async logout() {
    Cookie.remove(TOKEN_STORAGE_KEY);
    await Router.push("/");
  }
}
