// The place where we have send the request from quick node, we have to tell the destination of that place, ie the server


const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'YOUR API KEY'
};

// have to place the generated url in the url section. The url is generated using ngrok
const data = {
  name: 'My Destination',
  to_url: 'https://7de9-103-171-168-142.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));