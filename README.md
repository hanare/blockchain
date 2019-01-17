# blockchain
A blockchain REST API service. 

## Framework
* Express

## Setup
* clone the repo and in cmd type npm install
* to run the app type  ```DEBUG=blockchain:* npm start ```  in the terminal

## REST END POINT TO TEST
* (GET) http://localhost:3000/block/0 
* (POST) http://localhost:3000/block  
  PAYLOAD
  ```
  {
      "body": "Testing block with test string data"
  }
  ```