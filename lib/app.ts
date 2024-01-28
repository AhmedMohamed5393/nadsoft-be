import express from "express";
import * as env from "./environment";
import user from "./modules/user/router";

const app = express();
const port = env.PORT || 3000;
const host = env.HOST;

//  log all incoming http requests
app.use(requestsLogger);

// use modules routes
app.use(user);

app.get("/", (req, res) => { res.send("App is up and running!"); });

app.use(errorHandler);
app.set("port", port);

app.listen(
    +port,
    host,
    () => {
        try {
            console.log(`The server is connected to http://${host}:${port}`);    
        } catch (error) {
            throw error;
        }
    },
);

module.exports = app;

function errorHandler(err, req, res, next) {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {},
    })
}

function requestsLogger(req, res, next) {
    console.log(`${req.method}  ${req.url}  ${req.ip}`); 
    next(); 
}
