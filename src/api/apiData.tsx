import { get, post } from "./request";

export interface LoginGetType {
  uname: string;
  password: string | number;
}

export const loginPost = (data: LoginGetType) => {
  return post("/api/login", {
    data,
  });
};

export const testGet = () => {
  return get("/api/test");
};
