
export const AUTH = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};
export interface INIT {
  isLogined: boolean;
  user: null | USER;
}
export interface USER {
  id?: any;
  name?: any;
  img?: any;
}
export interface ACTION {
  type?: any;
  payload?: any;
}

