/* Assets Store Journal API test
 * * Validates /assets methods GET and POST
 * * Created by Yevgeniy Nosenko
 *
 * */


var frisby = require('frisby');
var api_responses = require('./../jsons/api_json_responses');
var assets_data = require('./../jsons/api_json_requests');

var expect = require('chai').expect;
var should = require('chai').should();

var host = 'http://172.22.194.29', path = '/api/1.0/assets',
    url = host + path,
    query_params = '?userId=' + assets_data.test_user //+ '&token=avid';


// GET /assets returns error
frisby.create('GET /assets returns error')

    .get(url)
    .expectStatus(500)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_responses.assets_error_response)

    .toss();


// GET /assets?userId={userID} returns success
query_params = '?userId=' + assets_data.test_user
frisby.create('GET /assets?query_params')

    .get(url + query_params)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_responses.status_success)
    .expectJSON(api_responses.assets_userid_response)

    .afterJSON(function (res) {
        expect(res.data.length).to.above(0);

    })

    .toss();

// GET /assets?userId={userID}&limit={limit} returns success
query_params = '?userId=' + assets_data.test_user + '&limit=5'
frisby.create('GET /assets?query_params with limit')

    .get(url + query_params)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_responses.status_success)
    .expectJSON(api_responses.assets_userid_response)

    .afterJSON(function (res) {
        expect(res.data.length).to.equal(5);

    })

    .toss();

// GET /assets?userId={userID}&limit={limit}&offset={offset} returns success
query_params = '?userId=' + assets_data.test_user
asset_id = '536a1f5f8f98b2532125358e'
frisby.create('GET /assets?query_params with limit and offset')

    .get(url + query_params + '&limit=5' + '&offset=0')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_responses.status_success)
    .expectJSON(api_responses.assets_userid_response)


    .afterJSON(function (res) {
        expect(res.data.length).to.equal(5);

        expect(res.data[2]._id).to.equal(asset_id);

        frisby.create('GET /assets?query_params with limit and offset')

            .get(url + query_params + '&limit=5' + '&offset=2')
            .expectStatus(200)

            .afterJSON(function (res){
                expect(res.data.length).to.equal(5);

                expect(res.data[0]._id).to.equal(asset_id);
                expect(res.data[2]._id).not.to.equal(asset_id);
            })

            .toss();

    })

    .toss();
