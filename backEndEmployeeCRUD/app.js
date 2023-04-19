const express = require('express');
const app = express();
const cors = require('cors');
const student = require('./router/student');
const login = require('./router/login');

app.use(express.json());
app.use(cors());
app.use(student);
app.use(login);

app.listen(4000,()=>{
    console.log('Server running successfully at 4000');
})
