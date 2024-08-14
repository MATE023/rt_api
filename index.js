//const express = require("express"); const app = express(); app.get("/", (req, res) => { res.send("Express on Vercel"); }); const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
//module.exports = app;

const express = require('express');
const app = express();
const problemRoutes = require('./src/routes/problemRoutes.js');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
app.use('/', problemRoutes);

app.get('/', (req, res) => {
    res.send("API");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

module.exports = app;