const redis = require('redis');

const client = redis.createClient({
    password: 'pInG8jMuBFHuDjFwozKrP3vD4aBkdFEG',
    socket: {
        host: 'redis-14046.c302.asia-northeast1-1.gce.cloud.redislabs.com',
        port: 14046
    }
});

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function(err) {
  console.error('Error connecting to Redis:', err);
});

module.exports = client;