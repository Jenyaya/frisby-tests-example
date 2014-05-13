//exports.jsonRootResponse = function jsonRootResponse() { return '{"status": "running"}' }

module.exports = {

    response: {"status": "running"},

    response2: function () {
        return {"status": "running"}
    },

    error_response: {"status": "error"},

    userid_response: {"status": "success", "data": [
        // {"_id": "536926ccf05e34cb1e939307", "ownerId": "12345678", "accountId": "1q2w3e4r", "name": "Test Asset", "__v": 0, "metadata": null, "attributes": [], "status": "init", "type": "pxf", "size": 0, "location": null, "availableZones": [], "originZone": null, "updatedAt": "2014-05-06T18:15:40.038Z", "createdAt": "2014-05-06T18:15:40.037Z", "versionParentId": null, "versionTop": true, "version": 0, "parentId": "98765432"},
    ]},

    status_success: {"status": "success"},

    status_error: {"status": "error"},

    no_userid: {
        "status": "error",
        "code": 500,
        "message": "Error on validation!",
        "errors": [
            {
                "message": "No set 'userId' parameter!",
                "path": "userId",
                "type": "require"
            }
        ]
    }


}




