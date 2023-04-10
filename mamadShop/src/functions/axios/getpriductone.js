import instance from "./isntance";
const getproductone = (id) => instance.get(`/Products/${id}`);
export default getproductone;
