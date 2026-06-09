const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const dbPath = path.join(__dirname, 'db.json');
const router = jsonServer.router(dbPath);
const publicPath = path.join(__dirname, 'public');

// Enable CORS for all origins
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Serve static files from public folder
// json-server.create() returns an express app, so we can use express.static via require
const express = require('express');
server.use(express.static(publicPath));

// Use json-server body parser
server.use(jsonServer.bodyParser);

// JSON server API routes
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  console.log(`Static files served from: ${publicPath}`);
});
