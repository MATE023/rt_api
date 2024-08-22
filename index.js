const express = require('express');
const cors = require('cors');
const app = express();
const problemRoutes = require('./src/routes/problemRoutes.js');
const solutionRoutes = require('./src/routes/solutionRoutes.js');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/', problemRoutes);
app.use('/', solutionRoutes);

app.get('/', (req, res) => {
    res.send("API");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

module.exports = app;