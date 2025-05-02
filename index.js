const express = require('express');
const cors = require('cors');
const app = express();
const problemRoutes = require('./src/routes/problemRoutes.js');
const solutionRoutes = require('./src/routes/solutionRoutes.js');
const answerRoutes = require('./src/routes/answerRoutes.js');
const questionRoutes = require('./src/routes/questionRoutes.js');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
//const { default: connection } = require('./src/services/db.js');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/', problemRoutes);
app.use('/', solutionRoutes);
app.use('/', answerRoutes);
app.use('/', questionRoutes);

app.get('/', (req, res) => {
    res.send("API");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
//connection()
module.exports = app;