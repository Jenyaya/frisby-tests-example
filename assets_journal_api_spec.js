var frisby = require('frisby');
var api_json = require('./jsons/api_json');
var assets_data = require('./jsons/assets');

var expect = require('chai').expect;
var should = require('chai').should();

var host = 'http://172.22.194.29', path = '/api/1.0/assets',
    url = host + path,
    query_params = '?userId=' + assets_data.test_user + '&token=avid';


frisby.create('GET /assets returns error')

    .get(url)
    .expectStatus(500)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json.assets_error_response)

    .toss();


frisby.create('GET /assets?query_params returns assets')

    .get(url + query_params)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json.status_success)
    .expectJSON(api_json.assets_userid_response)

    .toss();

frisby.create('POST new asset returns success')


    .post(url, assets_data.test_asset, {json: true})

    .expectStatus(201)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)


    .expectJSON('data', { "ownerId": assets_data.test_asset["ownerId"], "accountId": assets_data.test_asset["accountId"], "name": assets_data.test_asset["name"], "parentId": null, "status": "init"})

    .afterJSON(function (res) {

        var asset_id = res.data._id;

        frisby.create('DELETE created asset')

            .delete(url + '/' + asset_id)

            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
            .expectJSON(api_json.status_success)


            .expectJSON({"status": "success", "code": 200, "message": "Success operation", "data": 1})
            .toss();


    })


    .toss();


frisby.create('DELETE asset returns success')


    .post(url, assets_data.test_asset, {json: true})

    .expectStatus(201)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)


    .expectJSON('data', { "ownerId": assets_data.test_asset["ownerId"], "accountId": assets_data.test_asset["accountId"], "name": assets_data.test_asset["name"], "parentId": null, "status": "init"})

    .afterJSON(function (res) {

        var asset_id = res.data._id;

        frisby.create('DELETE created asset')

            .delete(url + '/' + asset_id)

            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
            .expectJSON(api_json.status_success)


            .expectJSON({"status": "success", "code": 200, "message": "Success operation", "data": 1})
            .toss();


    })


    .toss();


frisby.create('GET asset returns success')

    .get(url + '/536a36769f4867c02d6fbfbd')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .expectJSON({"status": "success", "code": 200, "message": "Success operation",
        "data": {"_id": "536a36769f4867c02d6fbfbd", "name": "My Asset5rdljt", "accountId": "1q2w3e4r", "ownerId": "12345678", "__v": 0, "metadata": null,
            "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null,
            "updatedAt": "2014-05-07T13:34:46.804Z", "createdAt": "2014-05-07T13:34:46.804Z", "versionParentId": null,
            "versionTop": true, "version": 0, "parentId": null}})



    .toss();


frisby.create('PUT update asset returns success')

    .get(url + '/536b32909d370f763b3251b5')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .expectJSON({"status": "success", "code": 200, "message": "Success operation",
        "data": {"_id": "536b32909d370f763b3251b5", "name": "My Asset5kxpr", "ownerId": "12345678", "accountId": "1q2w3e4r",
            "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [],
            "originZone": null, "updatedAt": "2014-05-08T07:30:24.410Z", "createdAt": "2014-05-08T07:30:24.410Z", "versionParentId": null,
            "versionTop": true, "version": 0, "parentId": "null"}})


    .put(url + '/536b32909d370f763b3251b5', {"data": {"_id": "536a36769f4867c02d6fbfbd", "name": "My Asset5_renamed"}})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .patch(url + '/536b32909d370f763b3251b5', {"data": {"_id": "536a36769f4867c02d6fbfbd", "name": "My Asset5_renamed"}})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .toss();