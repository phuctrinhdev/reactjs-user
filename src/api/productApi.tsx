import axiosClient from "./apiClient";

const productApi = {
  getList: (params?: any) => {
    const url = 'products';
    return axiosClient.get(url, { params });
  },
  getItem: (id?: any, params?: any ) => {
    const url = `products/${id}`;
    return axiosClient.get(url, { params });
  }
}

export default productApi;