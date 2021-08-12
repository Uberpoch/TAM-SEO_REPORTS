const axios = require('axios');

exports.call = async(token, url, obj, hub) => {
  let body = obj;
  body.hub_id = hub;

  return await axios.post(url, body, {
    headers: { 
        'Authorization': `Bearer ${token}`,
        'User_Agent': `Nathan UF`
    }
  })
  .catch (err => {
    console.log('Error', err.message);
  })
  .then(res => {
    return res.data;
  });
}