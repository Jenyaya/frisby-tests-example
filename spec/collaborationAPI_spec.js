//var frisby = require('frisby');
//
//
//var api_json = JSON.parse('{"status": "running"}');
//
//frisby.create('Test collaboration /api')
//
//    .get('http://localhost:5000/api/')
//    .expectStatus(200)
//    .expectHeaderContains('content-type', 'application/json')
//
//    .expectJSON(api_json)
//
//    .toss();
//
//
//frisby.create('Test collaboration /api/sessions/')
//
//    .get('http://localhost:5000/api/sessions/')
//
//    .expectStatus(200)
//    .expectHeaderContains('content-type', 'application/json')
//
//    .expectJSON([
//        {
//            "id": "d3cad8ec-98b9-455f-85e9-484c98eaad80",
//           "owner_id": "ef80120c-d19b-4feb-bdc2-effd8611c7b1",
//            "creation_date": "Monday, 28 April 3:55:20 p.m.(GMT + 0:00)",
//            "expiration_date": "Monday, 30 April 3:55:20 p.m.(GMT + 0:00)"
//        },
//        {
//            "id": "e21bf675-dcc6-40c1-b02f-e97cb72caf1f",
//            "owner_id": "2128262c-8b26-4d18-ad10-4ac7c9f4cf79",
//            "creation_date": "Monday, 28 April 3:55:20 p.m.(GMT + 0:00)",
//            "expiration_date": "Monday, 29 April 10:55:20 p.m.(GMT + 0:00)"
//        }
//    ]
//)
//    .toss();
//
//
//frisby.create('Test collaboration /api/sessions/')
//
//    .post('http://localhost:5000/api/sessions/')
//
//    .expectStatus(201)
//    .expectHeaderContains('content-type', 'text/plain')
//
//    .expectBodyContains('Created')
//    .toss();
//
//
//frisby.create('Test collaboration /api/sessions/:suid')
//
//    .get('http://localhost:5000/api/sessions/d3cad8ec-98b9-455f-85e9-484c98eaad80')
//
//    .expectStatus(200)
//    .expectHeaderContains('content-type', 'application/json')
//
//    .expectJSON(
//    {
//        "id": "d3cad8ec-98b9-455f-85e9-484c98eaad80",
//        "owner_id": "ef80120c-d19b-4feb-bdc2-effd8611c7b1",
//        "creation_date": "Monday, 28 April 3:55:20 p.m.(GMT + 0:00)",
//        "expiration_date": "Monday, 30 April 3:55:20 p.m.(GMT + 0:00)"
//    }
//)
//    .toss();
//
//frisby.create('Test collaboration /api/sessions/:suid/actions')
//
//    .get('http://localhost:5000/api/sessions/d3cad8ec-98b9-455f-85e9-484c98eaad80/actions')
//    .expectStatus(200)
//    .expectHeaderContains('content-type', 'application/json')
//
//    .expectJSON([
//        {
//            "name": "updateAsset",
//            "paramSet": {
//                "assetId": {
//                    "type": "string",
//                    "required": true
//                },
//                "paramSet": {
//                    "type": "mixed",
//                    "required": true
//                }
//            }
//        },
//        {
//            "name": "deleteAsset",
//            "paramSet": {
//                "assetId": {
//                    "type": "string",
//                    "required": true
//                }
//            }
//        },
//        {
//            "name": "sendMessage",
//            "paramSet": {
//                "recipients": {
//                    "type": "array",
//                    "required": true
//                }
//            }
//        }
//    ]
//)
//    .toss();