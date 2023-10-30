const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routers/index'));


app.listen(3000);
console.log('server por 3.000')