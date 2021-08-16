const axios = require('axios');

exports.callItems = async(token, url) => {
  return await axios.get(url, {
    headers: { 
        'Authorization': `Bearer ${token}`,
        'User_Agent': `Nathan UF`
    }
  })
  .then(res => {
    return res.data;
  })
  .catch (err => {
    console.log('Error', err.message);
    return err;
  })
}
exports.callStreams = async(token, url) => {
  return await axios.get(url, {
    headers: { 
        'Authorization': `Bearer ${token}`,
        'User_Agent': `Nathan UF`
    }
  })
  .then(res => {
    return res.data;
  })
  .catch (err => {
    console.log('Error', err.message);
    return err;
  })
}