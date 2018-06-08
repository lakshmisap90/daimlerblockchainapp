import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [{
    "id": "1",
    "cargo": "000fd83982",
    "status": "Vehicle produced",
    "ETA": "21-May-2018",
    "BIL": "934983",
    "vehicles": [{
        "id": "2.1",
        "name": "Mercedes Benz G",
        "Photo": "",
        "status": "Vehicle produced",
        "color": "designo mocha black metallic",
        "vin": "WDDZF0FB8JA376882",
        "model": "",
        "engine": "4 power"
      },
      {
        "id": "2.2",
        "name": "Mercedes Benz G",
        "Photo": "",
        "status": "Vehicle produced",
        "color": "designo mocha black metallic",
        "vin": "WDDZF0FB8JA376882",
        "model": "",
        "engine": "4 power"
      }
    ],
    "comments": {
      "properties": [{
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }, {
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }, {
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }]
    }
  },
  {
    "id": "2",
    "cargo": "000fd83475",
    "status": "Vehicle Exit Port of Departure",
    "ETA": "30-June-2018",
    "BIL": "937822173",
    "vehicles": [{
        "id": "2.1",
        "name": "Mercedes Benz G",
        "Photo": "",
        "status": "Vehicle produced",
        "color": "designo mocha black metallic",
        "vin": "WDDZF0FB8JA376882",
        "model": "",
        "engine": "4 power"
      },
      {
        "id": "2.2",
        "name": "Mercedes Benz G",
        "Photo": "",
        "status": "Vehicle produced",
        "color": "designo mocha black metallic",
        "vin": "WDDZF0FB8JA376882",
        "model": "",
        "engine": ""
      }
    ],
    "comments": {
      "properties": [{
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }, {
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }, {
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }]
    }

  },
  {
    "id": "3",
    "cargo": "000fd89637",
    "status": "Pay Duty for the vehicle",
    "ETA": "17-May-2018",
    "BIL": "93762485",
    "vehicles": [{
        "id": "3.1",
        "name": "Mercedes Benz G",
        "Photo": "",
        "status": "Pay Duty for the vehicle",
        "color": "designo mocha black metallic",
        "vin": "WDDZF0FB8JA376882",
        "model": "",
        "engine": "4 power"
      },
      {
        "id": "3.2",
        "name": "Mercedes Benz G",
        "Photo": "",
        "status": "Pay Duty for the vehicle",
        "color": "designo mocha black metallic",
        "vin": "WDDZF0FB8JA376882",
        "model": "",
        "engine": "4 power"
      }
    ],
    "comments": {
      "properties": [{
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }, {
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }, {
        "commentId": "",
        "personName": "",
        "personPhoto": "",
        "comment": ""
      }]
    }
  }
 ];

 const quotation = [{
   "qID":"1111111",
   "status" :"early",
   "ETA":"12 May 2018",
   "location" : {
     "latitude":"12.9716° N",
     "longitude":"77.5946° E",
   },
   "transactionStatus":[{
     "desc":"Vehicle Produced",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
     "currentStatus":"completed",
     "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle Exit Factory Dispatch Yard",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
     "currentStatus":"completed",
      "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle at Port of Departure",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
     "currentStatus":"notstarted",
      "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle Exit Port of Departure",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
     "currentStatus":"notstarted",
      "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   }],
   "delayReasons" : [{
     "name" : "John",
     "comment" : "Space or equipment shortage on the vessel."
   },
   {
     "name" : "Stephan",
     "comment" : " Port Congestion"
   },
   {
     "name" : "Marin",
     "comment" : "The vessel changed the routing"
   },
   {
     "name" : "James",
     "comment" : "The vessel broke."
   },
   {
     "name" : "Smith",
     "comment" : "Port authorities can not locate your container"
 }],
 "vehicles" : [{
     "vId":"32984",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz1.jpg",
     "vin":"611620",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "engine" : "4 power",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"4300",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz2.jpg",
     "vin":"410984",
     "color":"Black",
     "model":"G Class",
      "engine" : "4 power",
     "status":"Pay Duty for the vehicle",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"430202",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz1.jpg",
     "vin":"4903274",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"99173",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz6.jpg",
     "vin":"4584931",
     "color":"Black",
     "model":"G Class",
      "engine" : "4 power",
     "status":"Vehicle Exit Port of Departure",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"32091",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz4.jpg",
     "vin":"4324092843",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"611620",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz2.jpg",
     "vin":"611620",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
      "engine" : "4 power",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   }]
},
 {
   "qID":"222222",
   "status" :"ontime",
   "ETA":"27 June 2018",
   "location" : {
     "latitude":"11.9716° N",
     "longitude":"38.5966° E",
   },
   "transactionStatus":[{
     "desc":"Vehicle Produced",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
    "currentStatus":"completed",
     "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle Exit Factory Dispatch Yard",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
     "currentStatus":"notstarted",
      "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle at Port of Departure",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
    "currentStatus":"notstarted",
     "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle Exit Port of Departure",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
    "currentStatus":"notstarted",
     "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   }],
   "delayReasons" : [{
     "name" : "John",
     "comment" : "Space or equipment shortage on the vessel."
   },
   {
     "name" : "Stephan",
     "comment" : " Port Congestion"
   },
   {
     "name" : "Marin",
     "comment" : "The vessel changed the routing"
   },
   {
     "name" : "James",
     "comment" : "The vessel broke."
   },
   {
     "name" : "Smith",
     "comment" : "Port authorities can not locate your container"
 }],
 "vehicles" : [{
     "vId":"32984",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz1.jpg",
     "vin":"611620",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"4300",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz5.jpg",
     "vin":"410984",
     "color":"Black",
     "model":"G Class",
     "status":"Pay Duty for the vehicle",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"430202",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz3.jpg",
     "vin":"4903274",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"99173",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz5.jpg",
     "vin":"4584931",
     "color":"Black",
     "model":"G Class",
     "status":"Vehicle Exit Port of Departure",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"32091",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz1.jpg",
     "vin":"4324092843",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"611620",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz2.jpg",
     "vin":"611620",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   }]
 },
   {
     "qID":"33333",
     "status" :"rejected",
     "ETA":"10 July 2018",
     "location" : {
       "latitude":"16.9716° N",
       "longitude":"4.5946° E",
     },
     "transactionStatus":[{
       "desc":"Vehicle Produced",
       "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
         "currentStatus":"completed",
          "timestamp":"20 May 2018, 11:06 AM",
       "data":""
     },
     {
       "desc":"Vehicle Exit Factory Dispatch Yard",
       "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
         "currentStatus":"completed",
          "timestamp":"20 May 2018, 11:06 AM",
       "data":""
     },
     {
       "desc":"Vehicle at Port of Departure",
       "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
         "currentStatus":"completed",
          "timestamp":"20 May 2018, 11:06 AM",
       "data":""
     },
     {
       "desc":"Vehicle Exit Port of Departure",
       "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
         "currentStatus":"completed",
          "timestamp":"20 May 2018, 11:06 AM",
       "data":""
     }],
     "delayReasons" : [{
       "name" : "John",
       "comment" : "Space or equipment shortage on the vessel."
     },
     {
       "name" : "Stephan",
       "comment" : " Port Congestion"
     },
     {
       "name" : "Marin",
       "comment" : "The vessel changed the routing"
     },
     {
       "name" : "James",
       "comment" : "The vessel broke."
     },
     {
       "name" : "Smith",
       "comment" : "Port authorities can not locate your container"
   }],
   "vehicles" : [{
       "vId":"32984",
       "name":"Mercedex Benz G Class",
       "imageUrl":"assets/images/benz5.jpg",
       "vin":"611620",
       "color":"Black",
       "model":"G Class",
       "status":"vehicle produced",
       "customer":{
         "name":"Charles Hertz",
         "photo":"",
         "email":"charles.hertz@gmail.com",
         "phone":"+64-21246890"
       }
     },
     {
       "vId":"4300",
       "name":"Mercedex Benz G Class",
       "imageUrl":"assets/images/benz2.jpg",
       "vin":"410984",
       "color":"Black",
       "model":"G Class",
       "status":"Pay Duty for the vehicle",
       "customer":{
         "name":"Charles Hertz",
         "photo":"",
         "email":"charles.hertz@gmail.com",
         "phone":"+64-21246890"
       }
     },
     {
       "vId":"430202",
       "name":"Mercedex Benz G Class",
       "imageUrl":"assets/images/benz3.jpg",
       "vin":"4903274",
       "color":"Black",
       "model":"G Class",
       "status":"vehicle produced",
       "customer":{
         "name":"Charles Hertz",
         "photo":"",
         "email":"charles.hertz@gmail.com",
         "phone":"+64-21246890"
       }
     },
     {
       "vId":"99173",
       "name":"Mercedex Benz G Class",
       "imageUrl":"assets/images/benz5.jpg",
       "vin":"4584931",
       "color":"Black",
       "model":"G Class",
       "status":"Vehicle Exit Port of Departure",
       "customer":{
         "name":"Charles Hertz",
         "photo":"",
         "email":"charles.hertz@gmail.com",
         "phone":"+64-21246890"
       }
     },
     {
       "vId":"32091",
       "name":"Mercedex Benz G Class",
       "imageUrl":"assets/images/benz5.jpg",
       "vin":"4324092843",
       "color":"Black",
       "model":"G Class",
       "status":"vehicle produced",
       "customer":{
         "name":"Charles Hertz",
         "photo":"",
         "email":"charles.hertz@gmail.com",
         "phone":"+64-21246890"
       }
     },
     {
       "vId":"611620",
       "name":"Mercedex Benz G Class",
       "imageUrl":"assets/images/benz3.jpg",
       "vin":"611620",
       "color":"Black",
       "model":"G Class",
       "status":"vehicle produced",
       "customer":{
         "name":"Charles Hertz",
         "photo":"",
         "email":"charles.hertz@gmail.com",
         "phone":"+64-21246890"
       }
     }]
 },
 {
   "qID":"4444",
   "status" :"delayed",
   "ETA":"30 July 2018",
   "location" : {
     "latitude":"10.9716° N",
     "longitude":"11.5946° E",
   },
   "transactionStatus":[{
     "desc":"Vehicle Produced",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
       "currentStatus":"completed",
        "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle Exit Factory Dispatch Yard",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
       "currentStatus":"completed",
        "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle at Port of Departure",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
       "currentStatus":"completed",
        "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   },
   {
     "desc":"Vehicle Exit Port of Departure",
     "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
       "currentStatus":"completed",
        "timestamp":"20 May 2018, 11:06 AM",
     "data":""
   }],
   "delayReasons" : [{
     "name" : "John",
     "comment" : "Space or equipment shortage on the vessel."
   },
   {
     "name" : "Stephan",
     "comment" : " Port Congestion"
   },
   {
     "name" : "Marin",
     "comment" : "The vessel changed the routing"
   },
   {
     "name" : "James",
     "comment" : "The vessel broke."
   },
   {
     "name" : "Smith",
     "comment" : "Port authorities can not locate your container"
 }],
 "vehicles" : [{
     "vId":"32984",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz1.jpg",
     "vin":"611620",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"4300",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz2.jpg",
     "vin":"410984",
     "color":"Black",
     "model":"G Class",
     "status":"Pay Duty for the vehicle",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"430202",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz3.jpg",
     "vin":"4903274",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"99173",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz5.jpg",
     "vin":"4584931",
     "color":"Black",
     "model":"G Class",
     "status":"Vehicle Exit Port of Departure",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"32091",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz6.jpg",
     "vin":"4324092843",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   },
   {
     "vId":"611620",
     "name":"Mercedex Benz G Class",
     "imageUrl":"assets/images/benz1.jpg",
     "vin":"611620",
     "color":"Black",
     "model":"G Class",
     "status":"vehicle produced",
     "customer":{
       "name":"Charles Hertz",
       "photo":"",
       "email":"charles.hertz@gmail.com",
       "phone":"+64-21246890"
     }
   }]
},
{
  "qID":"555555",
  "status" :"delayed",
  "ETA":"20 August 2018",
  "location" : {
    "latitude":"39",
    "longitude":"21",
  },
  "transactionStatus":[{
    "desc":"Vehicle Produced",
    "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
      "currentStatus":"completed",
       "timestamp":"20 May 2018, 11:06 AM",
    "data":""
  },
  {
    "desc":"Vehicle Exit Factory Dispatch Yard",
    "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
      "currentStatus":"completed",
       "timestamp":"20 May 2018, 11:06 AM",
    "data":""
  },
  {
    "desc":"Vehicle at Port of Departure",
    "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
      "currentStatus":"completed",
       "timestamp":"20 May 2018, 11:06 AM",
    "data":""
  },
  {
    "desc":"Vehicle Exit Port of Departure",
    "tId":"df184050dfd2cb1e3a0bb93fd74f49355ggt",
      "currentStatus":"completed",
       "timestamp":"20 May 2018, 11:06 AM",
    "data":""
  }],
  "delayReasons" : [{
    "name" : "John",
    "comment" : "Space or equipment shortage on the vessel."
  },
  {
    "name" : "Stephan",
    "comment" : " Port Congestion"
  },
  {
    "name" : "Marin",
    "comment" : "The vessel changed the routing"
  },
  {
    "name" : "James",
    "comment" : "The vessel broke."
  },
  {
    "name" : "Smith",
    "comment" : "Port authorities can not locate your container"
}],
"vehicles" : [{
    "vId":"32984",
    "name":"Mercedex Benz G Class",
    "imageUrl":"assets/images/benz1.jpg",
    "vin":"611620",
    "color":"Black",
    "model":"G Class",
    "status":"vehicle produced",
    "customer":{
      "name":"Charles Hertz",
      "photo":"",
      "email":"charles.hertz@gmail.com",
      "phone":"+64-21246890"
    }
  },
  {
    "vId":"4300",
    "name":"Mercedex Benz G Class",
    "imageUrl":"assets/images/benz2.jpg",
    "vin":"410984",
    "color":"Black",
    "model":"G Class",
    "status":"Pay Duty for the vehicle",
    "customer":{
      "name":"Charles Hertz",
      "photo":"",
      "email":"charles.hertz@gmail.com",
      "phone":"+64-21246890"
    }
  },
  {
    "vId":"430202",
    "name":"Mercedex Benz G Class",
    "imageUrl":"assets/images/benz3.jpg",
    "vin":"4903274",
    "color":"Black",
    "model":"G Class",
    "status":"vehicle produced",
    "customer":{
      "name":"Charles Hertz",
      "photo":"",
      "email":"charles.hertz@gmail.com",
      "phone":"+64-21246890"
    }
  },
  {
    "vId":"99173",
    "name":"Mercedex Benz G Class",
    "imageUrl":"assets/images/benz6.jpg",
    "vin":"4584931",
    "color":"Black",
    "model":"G Class",
    "status":"Vehicle Exit Port of Departure",
    "customer":{
      "name":"Charles Hertz",
      "photo":"",
      "email":"charles.hertz@gmail.com",
      "phone":"+64-21246890"
    }
  },
  {
    "vId":"32091",
    "name":"Mercedex Benz G Class",
    "imageUrl":"assets/images/benz4.jpg",
    "vin":"4324092843",
    "color":"Black",
    "model":"G Class",
    "status":"vehicle produced",
    "customer":{
      "name":"Charles Hertz",
      "photo":"",
      "email":"charles.hertz@gmail.com",
      "phone":"+64-21246890"
    }
  },
  {
    "vId":"611620",
    "name":"Mercedex Benz G Class",
    "imageUrl":"assets/images/benz1.jpg",
    "vin":"611620",
    "color":"Black",
    "model":"G Class",
    "status":"vehicle produced",
    "customer":{
      "name":"Charles Hertz",
      "photo":"",
      "email":"charles.hertz@gmail.com",
      "phone":"+64-21246890"
    }
  }]
}];
    return {heroes,quotation};
  }
}
