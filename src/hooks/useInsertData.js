import baseUrl from "../Api/baseURL";

const userInsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const res = await baseUrl.post(url, params, config);

  return res;
};

const userInsertData = async (url, params) => {
  const res = await baseUrl.post(url, params);

  return res;
};

export { userInsertData, userInsertDataWithImage };
