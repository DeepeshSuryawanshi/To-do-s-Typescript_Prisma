//modules import
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';
import createError from 'http-errors'
//@ts-ignore
import prisma from ".././prisma";

// routes import 
import userRoutes from './router/User';

const app = express();
// modules add to app
app.use(cors({
    credentials:true
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// paths of routes
app.use('/user',userRoutes)
// app.use('/todo',todoRoutes)

app.use(function(req,res,next){
    next(createError(404))
})

export default app;