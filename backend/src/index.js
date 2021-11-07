const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors')

mongoose.connect('mongodb+srv://aidarocha:76t9U7q1nemwhoYh@cluster0.nkmbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('3000', () => {
  console.log('rodando na porta 3000');
});


module.exports = app;
