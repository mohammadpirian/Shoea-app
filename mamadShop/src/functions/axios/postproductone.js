import instance from "./isntance";
export const getDatauser = (userid) => instance.get(`/users/${userid}`);
export const postproductone = (userid, data) =>
  instance.put(`/users/${userid}`, data);
