const axios = require('axios');

axios.get('https://59ff-103-110-144-213.ngrok-free.app/')
   .then(response =>{
      console.log(response.data);
   })
.catch(error=>{
    console.error(error);
});