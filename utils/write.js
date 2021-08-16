const fs = require('fs');
exports.writeStreams = async(res, file) => {
    let allow = [
      "id",
      "name",
      "type",
      "seo_title",
      "seo_description",
      "seo_status",
      "no_robots",
      "hidden",
      "force_self_canonical"
    ];

    let data = JSON.stringify(res, allow, 2);
    fs.writeFileSync(`${file}-streamSEO.json`, data);
    console.log('stream json created');
  };
exports.writeItems = async(res, file) => {
    let allow = [
      "id",
      "title",
      "description",
      "seo_description",
      "seo_title",
      "published",
      "hidden"
    ];
    
    let data = JSON.stringify(res, allow, 2);
    fs.writeFileSync(`${file}-itemSEO.json`, data);
    console.log('item json created');
  };