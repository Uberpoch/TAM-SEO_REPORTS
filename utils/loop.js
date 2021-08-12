const { call } = require('./call');

exports.loop = async(token, ogItems, hub_id) => {
  let url = `https://v2.api.uberflip.com/streams`;
  let array = [];
  
  for(let i = 0; i < ogItems.length; i++) {
    let res = await call(token, url, ogItems[i], hub_id);
    array = array.concat(res.data);
  }
  
  return array;
}