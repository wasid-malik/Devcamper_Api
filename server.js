const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db');

//load env vars
dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();


//Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');


const app =  express();


//Body parser
app.use(express.json());


//Dev logging middleware

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mount Router
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);


app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow));

//Handle unhandeled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    //close server and exit the process
    server.close(() => process.exit(1));
});