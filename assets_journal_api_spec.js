var frisby = require('frisby');
var api_json = require('./jsons/api_json');
var assets_data = require('./jsons/assets');

var expect = require('chai').expect;
var should = require('chai').should();

var host = 'http://172.22.194.29', path = '/api/1.0/assets',
    url = host + path,
    query_params = '?userId=' + assets_data.test_user //+ '&token=avid';


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

    .afterJSON(function (res) {
        expect(res.data.length).to.above(0);

    })

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

    .get(url + '/536a3b387a1857243181e0c5')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .expectJSON({"status": "success", "code": 200, "message": "Success operation", "data": {"_id": "536a3b387a1857243181e0c5", "name": "My Asset5vqawh", "accountId": "1q2w3e4r", "ownerId": "12345678", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-07T13:55:04.621Z", "createdAt": "2014-05-07T13:55:04.621Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": null}})


    .put(url + '/536a3b387a1857243181e0c5', {"data": { "name": "My Asset5_renamed"}})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    /*.patch(url + '/536b32909d370f763b3251b5', {"data": {"_id": "536a36769f4867c02d6fbfbd", "name": "My Asset5_renamed"}})
     .expectStatus(200)
     .expectHeaderContains('content-type', 'application/json')
     .expectBodyContains('Cannot PATCH /api/1.0/assets/536b32909d370f763b3251b5')*/

    .toss();


frisby.create('GET asset name returns success')

    .get(url + '/536b365a5c91830641233700/name')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .expectJSON('data', {"name": "My Asset8Mayspmwd"})

    .toss();

var renamed = 'new_name' + Math.random().toString(36).replace(/[^a-z]/g, '').substr(2, 5)

frisby.create('PUT renames asset name returns success')

    .put(url + '/536b32909d370f763b3251b5/name', {name: renamed})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .expectJSON('data', {"name": renamed})

    .toss();


frisby.create('Load asset PUT /load')

    .put(url + '/536b74425c918306412337da/load', {
        "_id": '536b74425c918306412337da',
        "ownerId": assets_data.test_user
    })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .toss();


frisby.create('GET /assets/{assetId}/owner')
//536b74425c918306412337da
    .get(url + '/536b74425c918306412337da/owner')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .expectJSONTypes('data', {
        "_id": String,
        "ownerId": String
    })

    .expectJSON('data', {
        "_id": '536b74425c918306412337da',
        "ownerId": assets_data.test_user
    })

    .toss();

frisby.create('PUT /assets/{assetId}/owner')

    //536b74425c918306412337da
    .put(url + '/536b74425c918306412337da/owner', {"ownerId": assets_data.test_user})
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)

    .toss();

//536b72e55c918306412337c0

frisby.create('GET /assets/{assetId}/permissions')
    .get(url + '/536b72e55c918306412337c0/permissions')
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)


    .toss();