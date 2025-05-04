import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';
const baseURL = isProduction ? process.env.NEXT_PUBLIC_API_URL : '/api';

if (!baseURL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined in production');
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  //   withCredentials: true, // 쿠키 사용 시
});

export default axiosInstance;
