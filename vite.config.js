import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Cấu hình cổng của máy chủ phát triển
    proxy: {
      '/api': 'http://localhost:3000', // Chuyển hướng tất cả các yêu cầu "/api" đến http://localhost:3000
    },
  },
  define: {
    'process.env': {
      VITE_APP_BASE_URL: JSON.stringify('http://localhost:8080'), // Định nghĩa biến môi trường VITE_APP_BASE_URL với giá trị http://localhost:8080
    },
  },
});
