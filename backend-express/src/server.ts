require('dotenv').config();
import app from './app.ts'
import http from 'http';
const server = http.createServer(app);
server.listen(process.env.PORT,()=>{
    console.log("server is running on Port 5000");
})