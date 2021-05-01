# Nas-Academy-Test



## Installation

#### 1-  [npm](https://www.npmjs.com/package/npm) 
Used to run and install dependencies.

#### 2- install dependencies 
type this command on terminal of existing project folder.

```node
npm install
```

#### 3- run project
you can use these two ways for starting the project.

```node
npm start
```

```node
node App.js
```

## Environment Variables 
There is some variables which possible to change before it is project starts, 
you can modify them as you like, which changes some functionality inside the project during it works...

#### Locate file:
Find a file named *".env"* in project folder. There is 4 variables inside the file:
- *Port* : the project will running on the value of this variable port.
- *SlotSize* : Size of Slot Cars, Which mean number of cars possible to save in the slots.
- *Seconds* : How many seconds will be used for timeout of the requests for the rate limit.
- *MaxRequests* : How many request to be per selected seconds for rate limiter of requests.



## Endpoints

*Note:* you can get full documentation of endpoints [here](https://documenter.getpostman.com/view/10416484/TzRLkW5H).

- ### Park a new car - route
```
POST 

url: http://127.0.0.1:8080/api/v1/park

body: { "carNumber":"12345" }
```

 Successfull Respone: 
```

{
    "status": 200,
    "message": "new car added Successfully !",
    "slotNumber": "Your Slot Number is: XX",
    "data": {
        "slotNumber": XX,
        "carNumber": 12345,
        "ipAddress": "127.0.0.1",
        "carOwner": "Mohammed"
    }
}
```
Failed Respone: 
```
{
  status: 400,
  message:"Sorry, All slots now is fulled, We only Provide 
  "XX" slots for now!",
}
```


- ### UnPark a car - route
```
POST 

url: http://127.0.0.1:8080/api/v1/unpark

body: { "slotNumber":5 }
```

Successfull Respone: 
```
{
    "status": 200,
    "message": "UnPark the car had been Successfully !"
}
```
 Failed Respone: 
 ```
{
    "status": 400,
    "message": "This Slot Number is empty !"
}
```


- ### All cars - route
```
GET 

url: http://127.0.0.1:8080/api/v1/cars
```

Successfull Respone: 

```
{
    "status": 200,
    "data": [
        {
            "slotNumber": XXX,
            "carNumber": 12345,
            "ipAddress": "127.0.0.1",
            "carOwner": "Mohammed"
        }
    ]
}
```


- ### Car by slot number - route
```
GET 

url: http://127.0.0.1:8080/api/v1/carbyslot

body: { "slotNumber":2 }
```
Successfull Respone: 

```
{
    "status": 200,
    "data": [
        {
            "slotNumber": XXX,
            "carNumber": 12345,
            "ipAddress": "127.0.0.1",
            "carOwner": "Mohammed"
        }
    ]
}
```


##### By: [Mohammed Bakr](https://github.com/mahammadbakr)


## License
[ISC License](https://choosealicense.com/licenses/mit/)

Copyright (c) [2021], [[Mohammed Bakr](https://github.com/mahammadbakr)]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.