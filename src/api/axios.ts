import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";
const axiosInstance = axios.create({
  baseURL: isProduction ? process.env.NEXT_PUBLIC_API_URL : "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // 쿠키 사용 시
});

export default axiosInstance;
