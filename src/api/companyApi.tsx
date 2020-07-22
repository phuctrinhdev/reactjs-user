import axiosClient from "./apiClient";

const companyApi = {
  getList: (params: any) => {
    const url = 'company';
    return axiosClient.get(url, { params });
  }
}

export default companyApi;