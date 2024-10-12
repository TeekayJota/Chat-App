const express = require('express');
const app = express();
const chatRoutes = require('./routes/chat');

app.use(express.json());
app.use(express.static('public'));

app.use('/api/chat', chatRoutes);

module.exports = app;
