const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3001; // You can use any port you prefer

// Create a proxy route for the API
app.use('/api', createProxyMiddleware({
  target: 'https://656ac402dac3630cf7274730.mockapi.io/Travel/packages',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove the '/api' prefix when forwarding the request
  },
}));

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
