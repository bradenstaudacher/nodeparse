//////////////////////////////////////////////////////////////////// 
// Grab the body response from the webpage
var request = require('request');
request('http://substack.net/images/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    parseBody(body);
  }
});
//////////////////////////////////////////////////////////////////// 
// Load cheerio and begin selection process
var cheerio = require('cheerio');
function parseBody(data){
  console.log("In parseBody")
  $ = cheerio.load(data);
  var pattern = /.*(\.\w{2,})/i
  $('tr').each(function(index, element){
    var permission = $(this).children().first().text();
    var link = $(this).find('a').attr('href');
    var match = pattern.exec($(this).children().last().text());
    if (match){
      var filetype = match[1];
    }

  fs.appendFile('data.csv', permission + ',' + link + ',' + filetype + '\n', function (err) {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
});
  });
  // $('tr td a').each(function(index, element){
  //   console.log("Absolute Link", $(this).attr('href'));
  // });
}

//////////////////////////////////////////////////////////////////// 
// Load fs to write to csv

var fs = require('fs');











