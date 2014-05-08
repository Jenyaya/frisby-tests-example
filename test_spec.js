var frisby = require('frisby');

var api_json = require('./jsons/api_json');


console.log(api_json.response);


frisby.create('Test collaboration /api')

    .get('http://localhost:5000/api/')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json.response)

    .toss();


console.log(api_json.response2());
frisby.create('Test collaboration /api')

    .get('http://localhost:5000/api/')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json.response2())

    .toss();

frisby.create('Ensure test has foo and bar')
    .get('http://httpbin.org/get?foo=bar&bar=baz')
    .expectJSON('args', {'foo': 'bar'})
    .toss()