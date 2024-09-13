import axios from "axios";

<<<<<<< HEAD

=======
>>>>>>> be6bfb195b9bfe87427cf1e6f3cfc4a1b9b5ccdb
export const API_URL = "http://localhost:3000/";

export const getData = async (link) => {
  try {
    return await axios.get(API_URL + link);
  } catch (error) {
    return error.message;
  }
};

export const dataFetching = async (link, type, data, id = "") => {
  switch (type) {
    case "getData":
      return await axios.get(API_URL + link);
    case "postData":
      return await axios.post(API_URL + link, data);
    case "updateData":
      const url = id ? `${API_URL + link}/${id}` : API_URL + link;
      return await axios.put(url, data);
  }
};
