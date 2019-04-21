const rp = require('request-promise');
const cheerioTableparser = require('cheerio-tableparser');
const cheerio = require('cheerio');

const url = 'https://sheriff.co.delaware.oh.us/sheriff-sales/';

rp(url)
  .then(function(html){
	$ = cheerio.load(html);

	cheerioTableparser($);
	var data = $('table').parsetable(true, true, true);
	data = transpose(data);
	console.log(data);

	var labels = data[0]
	var output = data.slice(1).map(item => item.reduce((obj, val, index) => {
	  obj[labels[index]] = val
	  return obj
	}, {}))

//	console.log(output);
	output.forEach(function(obj) { console.log(obj.id); });
  })
  .catch(function(err){
    //handle error
  });

  function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}