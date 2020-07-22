import axiosClient from "./apiClient";

const productApi = {
  getList: (params?: any) => {
    const url = 'product';
    return axiosClient.get(url, { params });
  }
}

export default productApi;