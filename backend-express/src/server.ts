// require('dotenv').config();
import env from './config/env.ts';
import app from './app.ts'
import http from 'http';
const server = http.createServer(app);
server.listen(env.PORT,()=>{
    console.log("server is running on Port 5000");
})