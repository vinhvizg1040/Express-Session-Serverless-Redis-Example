const express = require('express');
const axios = require('axios');
const PORT = 3002;
const app = express();
const rediss = require('./redis');
const { getCache, setCache, setChaceOnTime,
    isCacheExist } = require('./cacheService');

app.get('/', async (req, res) => {
    try {

        console.time('LOG_TIME');
        //value is exists
        if (isCacheExist("markdown")) {
            console.timeEnd('LOG_TIME');
            return res.json({ status: 200, message: 'OK' })
        }
        axios({
            method: 'GET',
            url: 'https://zgcopes-server.vercel.app/md/getAllMarkdown',
        }).then(async response => {
            //send data to redis
            await setCache('markdown', JSON.stringify(response.data));
            console.timeEnd('LOG_TIME');
            return res.json(JSON.stringify(response.data));
        }).catch(async e => {
            console.log(e);
            return res.json({ status: 500, message: 'error' });
        })
    } catch (e) {
        console.log(e);
        return res.status(500);
    }
});

// app.get('/', async (req, res) => {
//     try {
//         console.time('LOG_TIME');
//         axios({
//             method: 'GET',
//             url: 'http://localhost:3001/md/getListOfMarkdown',
//         }).then(async response => {
//             const userId = response.data;
//             console.timeEnd('LOG_TIME');
//             return res.json({userId});
//         }).catch(async e => {
//             console.log(e);
//             return res.json({status: 500, message: 'error'});
//         })
//     } catch (e) {
//         console.log(e);
//     }
// });


app.listen(PORT, (req, res) => {
    console.log('App is runing at port ', PORT);
})
