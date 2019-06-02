define({ "api": [
  {
    "type": "post",
    "url": "/add_candidate",
    "title": "Adds new candidate",
    "name": "Add_Candidate",
    "group": "Election",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the candidate</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "party",
            "description": "<p>Party of the candidate</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Master address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/routes/index.js",
    "groupTitle": "Election"
  },
  {
    "type": "post",
    "url": "/finish",
    "title": "Finishes election",
    "name": "Finish",
    "group": "Election",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Master address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/routes/index.js",
    "groupTitle": "Election"
  },
  {
    "type": "get",
    "url": "/info",
    "title": "Request candidates info",
    "name": "Info",
    "group": "Election",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "candidates",
            "description": "<p>List of cadidates.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "candidate.id",
            "description": "<p>Id of the candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidate.name",
            "description": "<p>Name of the candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidate.party",
            "description": "<p>Party of the candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 0,\n        \"name\": \"Joao\",\n        \"party\": \"PT\",\n    },\n    {\n        \"id\": 1,\n        \"name\": \"Otavio\",\n        \"party\": \"PSDB\",\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/index.js",
    "groupTitle": "Election"
  },
  {
    "type": "get",
    "url": "/results",
    "title": "Request election results",
    "name": "Results",
    "group": "Election",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "candidates",
            "description": "<p>List of cadidates.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "candidate.id",
            "description": "<p>Id of the candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidate.name",
            "description": "<p>Name of the candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidate.party",
            "description": "<p>Party of the candidate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "candidate.voteCount",
            "description": "<p>Vote Count of the candidate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 0,\n        \"name\": \"Joao\",\n        \"party\": \"PT\",\n        \"voteCount\": 112\n    },\n    {\n        \"id\": 1,\n        \"name\": \"Otavio\",\n        \"party\": \"PSDB\",\n        \"voteCount\": 87\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes/index.js",
    "groupTitle": "Election"
  },
  {
    "type": "post",
    "url": "/vote",
    "title": "Votes on a candidate",
    "name": "Votes",
    "group": "Election",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Candidate Id</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Voter address</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/routes/index.js",
    "groupTitle": "Election"
  }
] });
