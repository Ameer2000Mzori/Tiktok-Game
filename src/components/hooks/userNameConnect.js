import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const AuthOperations = ({ onSuccess, onError }) => {
  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: ([{ method, url, ...arg }]) => {
      console.log(" info we got ", method, url, arg);
      return axios
        .request({
          url: `http://localhost:3000/${url}`,
          method: `${method}`,
          data: {
            ...arg,
          },
        })
        .then((result) => result.data)
        .catch((error) => {
          console.log(" error we got ", error);
          throw error;
        });
    },
    onSuccess:
      onSuccess ??
      (() => {
        console.log("onSuccess in auth ");
      }),

    onError:
      onError ??
      (() => {
        console.log("on onError in auth ");
      }),
  });

  return { mutate, isPending, isError, data };
};

export default AuthOperations;
