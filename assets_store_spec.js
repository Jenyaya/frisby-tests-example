var frisby = require('frisby');
var api_json = require('./jsons/api_json');

var expect = require('chai').expect;
var should = require('chai').should();

var host = 'http://172.22.194.29', path = '/api/1.0', url = host + path,
    query_params = '?userId=12345678&token=avid'


var test_post = {
    "name":    "My Asset5" + Math.random().toString(36).replace(/[^a-z]/g, '').substr(2, 5),
    "accountId":    "1q2w3e4r",
    "ownerId": "12345678"

};



frisby.create('Test assets /assets')

    .get(url + '/assets')
    .expectStatus(500)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json.assets_error_response)

    .toss();

frisby.create('Test asset data /assets?userId=12345678')

    .get(url + '/assets' + query_params)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON('data', [{"_id":"536a1bf18f98b25321253583","name":"My Asset","accountId":"1q2w3e4r","ownerId":"12345678","__v":0,"metadata":null,"attributes":[],"status":"init","type":"pxf","size":0,"location":null,"availableZones":[],"originZone":null,"updatedAt":"2014-05-07T11:41:37.155Z","createdAt":"2014-05-07T11:41:37.155Z","versionParentId":null,"versionTop":true,"version":0,"parentId":null}])
    .toss();

frisby.create('Test asset /assets?userId=12345678')

    .get(url + '/assets' + query_params)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')

    .expectJSON(api_json.assets_userid_response)

    .toss();



frisby.create('Test POST asset /assets')

    .post(url + '/assets', test_post)
    .expectStatus(201)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSON(api_json.status_success)
    .expectJSON('data', { "ownerId": test_post["ownerId"], "accountId": test_post["accountId"], "name": test_post["name"], "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "versionParentId": null, "versionTop": true, "version": 0, "parentId": null})


    .afterJSON(function(res) {

        console.log(res);
        console.log(res.status);

        expect(res.status).be.equal('success')
        res.status.should.equal('success')

    })

    .toss();





