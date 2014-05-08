//exports.jsonRootResponse = function jsonRootResponse() { return '{"status": "running"}' }

module.exports = {

    response: {"status": "running"},

    response2: function () {
        return {"status": "running"}
    },

    assets_error_response: {"status":"error"},

    assets_userid_response: {"status": "success", "data": [
        {"_id": "536926ccf05e34cb1e939307", "ownerId": "12345678", "accountId": "1q2w3e4r", "name": "Test Asset", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-06T18:15:40.038Z", "createdAt": "2014-05-06T18:15:40.037Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": "98765432"},
        {"_id": "536926e5f05e34cb1e939308", "ownerId": "12345678", "accountId": "1q2w3e4r", "name": "Test Asset", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-06T18:16:05.818Z", "createdAt": "2014-05-06T18:16:05.818Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": "98765432"},
        {"_id": "53692709f05e34cb1e939309", "ownerId": "12345678", "accountId": "1q2w3e4r", "name": "Test Asset", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-06T18:16:41.557Z", "createdAt": "2014-05-06T18:16:41.557Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": "98765432"},
        {"_id": "53692715f05e34cb1e93930a", "ownerId": "12345678", "accountId": "1q2w3e4r", "name": "Test Asset", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-06T18:16:53.199Z", "createdAt": "2014-05-06T18:16:53.199Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": "98765432"},
        {"_id": "53692726f05e34cb1e93930b", "ownerId": "12345678", "accountId": "1q2w3e4r", "name": "Test Asset", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-06T18:17:10.978Z", "createdAt": "2014-05-06T18:17:10.978Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": "98765432"},
        {"_id": "5369274bf05e34cb1e93930c", "ownerId": "12345678", "accountId": "1q2w3e4r", "name": "Test Asset", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-06T18:17:47.137Z", "createdAt": "2014-05-06T18:17:47.137Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": "98765432"}
    ]},

    status_success: {"status":"success"}


}




