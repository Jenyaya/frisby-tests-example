module.exports = {

    test_user : "12345678",
    test_user2 : "789987",

    test_asset : {
        "name":    "My Asset 13May_" + Math.random().toString(36).replace(/[^a-z]/g, '').substr(2, 5),
        "accountId":    "1q2w3e4r",
        "ownerId": "12345678",
        "parentId": null
    },

    test_asset2 : {
        "name":    "My Asset 13May_" + Math.random().toString(36).replace(/[^a-z]/g, '').substr(2, 5),
        "accountId":    "1q2w3e4r",
        "ownerId": "789987",
        "parentId": null
    }


}