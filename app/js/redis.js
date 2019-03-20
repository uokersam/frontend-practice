var redis = require('redis');

client = redis.createClient();

client.on('connect', function() {
  console.log('connected');
});
// set
client.set('foo', 100, function(err, reply) {
  console.log(reply);

});
//get
client.get('foo', function(err, reply) {
  console.log(reply);

});

// creating an object,
// framework is key word, all rest are key pairs
client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap',
    'node', 'Express');

client.hgetall('frameworks', function(err, object) {
  console.log(object);
});

// alternative syntax of creating objects
// frameworks1 - key word
// all reast are JSON object
client.hmset('frameworks1', {
  'javascript': 'AngularJS',
  'css': 'Bootstrap',
  'node': 'Express',
}, function(err, object) {
  console.log(object);
});

client.hgetall('frameworks1', function(err, object) {
  console.log(object);
});

// remove
client.del('frameworks', function(err, reply) {
  console.log(reply);
});

// increment
client.set('key1', 10, function() {
  client.incr('key1', function(err, reply) {
    console.log(reply); // 11
  });
});

// decrement
client.set('key1', 10, function() {
  client.decr('key1', function(err, reply) {
    console.log(reply); // 11
  });
});
client.quit();