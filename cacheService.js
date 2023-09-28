const client = require('./redis');

function setCache(key, value) {
    client.set(key, value);
}

function getCache(key) {
    client.get(key);
}

// EX: secound
// PX : milisecound
// EXAT: timestamp-secound
//Syntax: SET key value [NX | XX] [GET] [EX seconds | PX milliseconds |
// EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]

function setChaceOnTime(key, value, secound) {
  client.set(key, value, "EX", secound);
}

function isCacheExist(key, value) {
  if(getCache(key, value)){
    return true;
  }else{
    return false;
  }
}

module.exports = {
  setCache,
  getCache,
  setChaceOnTime,
  isCacheExist
};