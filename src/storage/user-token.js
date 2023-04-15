import Cookies from "js-cookie";
import { atom } from "jotai";

const AUTH_TOKEN_KEY = 'auth_shoes88_token';
const AUTH_REFRESH_TOKEN = 'auth_shoes88_refresh_token';

export function checkIsLogin() {
    const token = Cookies.get(AUTH_TOKEN_KEY);
    if (!token) return false;
    return true;
}

export const authAtom = atom(checkIsLogin());

export const useToken = () => {
    return {
        setToken(token) {
          Cookies.set(AUTH_TOKEN_KEY, token, { expires: 1 });
        },
        getToken() {
          return Cookies.get(AUTH_TOKEN_KEY);
        },
        setRefreshToken(token) {
          Cookies.set(AUTH_REFRESH_TOKEN_KEY, token, { expires: 5 });
        },
        getRefreshToken() {
          return Cookies.get(AUTH_REFRESH_TOKEN_KEY);
        },
        removeToken() {
          Cookies.remove(AUTH_TOKEN_KEY);
          Cookies.remove(AUTH_REFRESH_TOKEN_KEY);
        },
        hasToken() {
          const token = Cookies.get(AUTH_TOKEN_KEY);
          if (!token) return false;
          return true;
        },
      };
}