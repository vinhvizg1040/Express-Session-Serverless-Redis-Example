const Redis = require('ioredis');

const redis = new Redis({
    port: 14046, // Redis port
    host: "redis-14046.c302.asia-northeast1-1.gce.cloud.redislabs.com", // Redis host
    username: "default", // needs Redis >= 6
    password: "pInG8jMuBFHuDjFwozKrP3vD4aBkdFEG",
    db: 0, // Defaults to 0
  });

module.exports = redis;