const { callItems, callStreams } = require('./call');

exports.getItemsLoop = async(token, hub) => {
  let url = `https://v2.api.uberflip.com/hubs/${hub}/items?limit=100`;
  let page = 0;
  let totalPages = 0;
  let resItems = [];

  do {
    let res = await callItems(token, url);
    totalPages = res.meta.total_pages;
    page++;
    url = res.meta.next_page;
    resItems = resItems.concat(res.data);
    console.log(`page ${page} of ${totalPages} called`);
  } while (page < totalPages);
  return resItems;
};

exports.getStreamsLoop = async(token, hub) => {
  let url = `https://v2.api.uberflip.com/hubs/${hub}/streams?limit=100`;
  let page = 0;
  let totalPages = 0;
  let resStreams = [];

  do {
    let res = await callStreams(token, url);
    totalPages = res.meta.total_pages;
    page++;
    url = res.meta.next_page;
    resStreams = resStreams.concat(res.data);
    console.log(`page ${page} of ${totalPages} called`);
  } while (page < totalPages);
  return resStreams;
};