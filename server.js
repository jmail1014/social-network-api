const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
// called as middleware
app.use(express.urlencoded({ extended: true }));


app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));