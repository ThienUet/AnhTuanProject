import Cookies from 'js-cookie';

const AUTH_TOKEN_KEY = 'auth_token_shoes88';
const AUTH_REFRESH_TOKEN_KEY = 'refresh_token_shoes88';


  const authenticateUser = (token) => {
    Cookies.set(AUTH_TOKEN_KEY, token, { expires: 86400 });
  }

  const deAuthenticateUser = () => {
    Cookies.remove(AUTH_TOKEN_KEY);
    Cookies.remove(AUTH_REFRESH_TOKEN_KEY);
  }

  const getToken = () => {
    return Cookies.get(AUTH_TOKEN_KEY);
  }

  const _getUser = () => {
    try {
      const token = getToken();
      return token;
    } catch (error) {
      return null;
    }
  }
export {authenticateUser, deAuthenticateUser, getToken, _getUser};