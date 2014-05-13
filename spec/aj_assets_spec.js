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
    .expectJSON(api_responses.status_error)
    .expectJSON(api_responses.no_userid)

    .toss();


// GET /assets?userId={userID} returns success
frisby.create('GET /assets?query_params')

    .get(url + query_params)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_responses.status_success)
    .expectJSON(api_responses.userid_response)

    .afterJSON(function (res) {
        expect(res.data.length).to.above(0);

    })

    .toss();

// GET /assets?userId={userID}&limit={limit} returns success
frisby.create('GET /assets?query_params with limit')

    .get(url + query_params + '&limit=5')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_responses.status_success)
    .expectJSON(api_responses.userid_response)

    .afterJSON(function (res) {
        expect(res.data.length).to.equal(5);

    })

    .toss();

// GET /assets?userId={userID}&limit={limit}&offset={offset} returns success
asset_id = '536a1f5f8f98b2532125358e'
frisby.create('GET /assets?query_params with limit and offset')

    .get(url + query_params + '&limit=5' + '&offset=0')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_responses.status_success)
    .expectJSON(api_responses.userid_response)


    .afterJSON(function (res) {
        expect(res.data.length).to.equal(5);

        expect(res.data[2]._id).to.equal(asset_id);

        frisby.create('GET /assets?query_params with limit and offset')

            .get(url + query_params + '&limit=5' + '&offset=2')
            .expectStatus(200)

            .afterJSON(function (res) {
                expect(res.data.length).to.equal(5);

                expect(res.data[0]._id).to.equal(asset_id);
                expect(res.data[2]._id).not.to.equal(asset_id);
            })

            .toss();

    })

    .toss();

// GET /assets?userId={userID}&sort=createdAt returns success
frisby.create('GET /assets with sort by createdAt')

    .get(url + query_params + '&sort=createdAt')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_responses.status_success)

    .afterJSON(function (res) {

        var date1 = new Date(res.data[0].createdAt)
        var date2 = new Date(res.data[1].createdAt)

        date1.should.be.above(date2)


    })

    .toss();

// GET /assets?userId={userID}&sort=updatedAt returns success
frisby.create('GET /assets with sort by createdAt')

    .get(url + query_params + '&sort=updatedAt')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_responses.status_success)

    .afterJSON(function (res) {

        var date1 = new Date(res.data[0].updatedAt)
        var date2 = new Date(res.data[1].updatedAt)

        date1.should.be.above(date2)


    })

    .toss();


// GET /assets?userId={userID}&order=asc returns success
frisby.create('GET /assets with order by asc')

    .get(url + query_params + '&sort=createdAt' + '&order=asc')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_responses.status_success)

    .afterJSON(function (res) {

        var date1 = new Date(res.data[0].createdAt)
        var date2 = new Date(res.data[1].createdAt)

        date1.should.be.below(date2)

    })

    .toss();


// GET /assets?userId={userID}&order=asc returns success
frisby.create('GET /assets with order by desc')

    .get(url + query_params + '&sort=createdAt' + '&order=desc')

    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_responses.status_success)

    .afterJSON(function (res) {

        var date1 = new Date(res.data[0].createdAt)
        var date2 = new Date(res.data[1].createdAt)

        date1.should.be.above(date2)


    })
    .toss();


// POST /assets new asset
frisby.create('POST new asset returns success')


    .post(url, assets_data.test_asset, {json: true})

    .expectStatus(201)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_responses.status_success)


    .expectJSON('data', { "ownerId": assets_data.test_asset["ownerId"], "accountId": assets_data.test_asset["accountId"], "name": assets_data.test_asset["name"], "parentId": null, "status": "init"})

    .afterJSON(function (res) {

        var asset_id = res.data._id;

        frisby.create('DELETE created asset')

            .delete(url + '/' + asset_id)

            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
            .expectJSON(api_responses.status_success)


            .expectJSON({"status": "success", "code": 200, "message": "Success operation", "data": 1})
            .toss();


    })


.toss();