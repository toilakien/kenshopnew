import React from "react";
import { ACTION, AUTH, INIT } from "../types/jwtType/index";
import axios from "../utils/axios";
import jwt_decode from "jwt-decode";
import API_URL from "../utils/Api";
const init: INIT = {
  isLogined: false,
  user: null,
};
const JWTContext = React.createContext<any | null>(null);

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: any = jwt_decode(serviceToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken?: string | null) => {
  if (serviceToken && verifyToken(serviceToken)) {
    localStorage.setItem("serviceToken", JSON.stringify(serviceToken));
    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem("serviceToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const setUser = (user?: any | null) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
    delete axios.defaults.headers.common.Authorization;
  }
};
const authReducer = (state=init, action: ACTION) => {
  switch (action.type) {
    case AUTH.LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        isLogined: true,
        user,
      };
    }
    case AUTH.LOGOUT: {
      return {
        ...state,
        isLogined: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const JWTProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = React.useReducer(authReducer, init);

  const login = async (
    username: string,
    password: string,
    remember_me?: boolean
  ) => {
    const response = await axios.post(API_URL.auth.login, {
      username,
      password,
    });
    console.log(response);

    const { token, user } = response?.data;
    console.log(token);

    setSession(token);
    setUser(user);
    dispatch({
      type:AUTH.LOGIN,
      payload:{
        isLogined:true,
      }
    });
  };

  const logout = () => {
    setSession(null);
    setUser(null);
    dispatch({});
  };

  return (
    <JWTContext.Provider value={{...state,login, logout }}>
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
