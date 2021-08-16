const axios = require('axios')
exports.auth = async (key, secret) => {
    return axios.post('https://v2.api.uberflip.com/authorize', {
        grant_type:	'client_credentials',
        client_id: key,
        client_secret: secret
    })
    .then(function (response) {
        // tokenType = response.data.token_type;
         const token = response.data.access_token;
        // console.log(token);
        return token;
    })
    .catch(function (error) {
      console.log(error.message);
      return;
    })

}