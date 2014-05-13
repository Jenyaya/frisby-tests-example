var frisby = require('frisby');

var api_json = require('./jsons/api_json_responses');


console.log(api_json_responses.response);


frisby.create('Test collaboration /api')

    .get('http://localhost:5000/api/')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json_responses.response)

    .toss();


console.log(api_json_responses.response2());
frisby.create('Test collaboration /api')

    .get('http://localhost:5000/api/')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json_responses.response2())

    .toss();

frisby.create('Ensure test has foo and bar')
    .get('http://httpbin.org/get?foo=bar&bar=baz')
    .expectJSON('args', {'foo': 'bar'})
    .toss()