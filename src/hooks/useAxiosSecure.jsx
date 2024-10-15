// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";

// const axiosSecure = axios.create({
//   baseURL: "http://localhost:5000",
// });
// const useAxiosSecure = () => {
//   const navigate = useNavigate();
//   const { logOut } = useAuth();
//   //request interceptor
//   axiosSecure.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("access-token");
//     console.log("request stopped by interseptor", token);
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   }),
//     function (error) {
//       return Promise.reject(error);
//     };

//   axiosSecure.interceptors.request.use(
//     function (response) {
//       return response;
//     },
//     async (error) => {
//       const status = error.response.status;
//       console.log("status error in the interseptor", status);
//       //for 401 and 403 ogut the user and move the user
//       if (status === 401 || status === 403) {
//         await logOut();
//         navigate("/login");
//       }
//       return Promise.reject(error);
//     }
//   );

//   return axiosSecure;
// };

// export default useAxiosSecure;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        // console.log("Token added to request header:", token);
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        console.log("No token found");
      }
      return config;
    },
    (error) => {
      console.log("Request error", error);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      // If the request is successful, just return the response
      return response;
    },
    async (error) => {
      const status = error.response ? error.response.status : null;
      console.log("Error status in response interceptor:", status);

      // If the error is due to unauthorized or forbidden access
      if (status === 401 || status === 403) {
        await logOut(); // Log the user out
        navigate("/login"); // Redirect to the login page
      }
      return Promise.reject(error); // Always reject the error to handle it later
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
