import axios, { Method } from "axios";
import store from "@/store";
import { isUndefinedOrNotNull } from "@/utils/validate";

axios.defaults.baseURL = "https://reqres.in";
axios.defaults.method = "post";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const mainAPI = async (
  url: string,
  data?: any,
  method?: Method
): Promise<any> => {
  let result: any = null;
  let headers = null;

  if (data === undefined || data === {}) data = null;
  if (Object.keys(data).length === 0) data = null;

  const token = store.getters["login/getToken"];

  if (isUndefinedOrNotNull(token) && token !== "") {
    headers = {
      "access-token": token
    };
  }

  try {
    store.dispatch("loading", true);
    await axios({
      method,
      url,
      data,
      headers
    })
      .then(function(response): void {
        //handel success
        console.log("mainAPI result: ", response.data);
        result = response.data;
      })
      .catch(function(error): void {
        // handll error
        console.log("mainAPI error: ", error);
        // movieList = null;
        result = null;
      })
      .finally(function(): void {
        // console.log("mainAPI finally: ", result);
        store.dispatch("loading", false);
      });
  } catch (e) {
    console.log(e);
  }

  return result;
};

export const openAPI = async (
  url: string,
  data?: any,
  method?: Method
): Promise<any> => {
  let result: any = null;

  if (data === undefined || data === {}) data = null;
  if (Object.keys(data).length === 0) data = null;

  try {
    store.dispatch("loading", true);
    await axios({
      method,
      url,
      data: data
    })
      .then(function(response): void {
        //handel success
        console.log("openAPI result: ", response.data);
        result = response.data;
      })
      .catch(function(error): void {
        // handll error
        console.log("openAPI error: ", error);
        // movieList = null;
        result = null;
      })
      .finally(function(): void {
        // console.log("openAPI finally: ", result);
        store.dispatch("loading", false);
      });
  } catch (e) {
    console.log(e);
  }

  return result;
};

export default mainAPI;
