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

// function parseBody(data){
//   console.log("In parseBody")
//   $ = cheerio.load(data);
//   $('tr td').each(function(index, element){
//     if (index % 3 == 0) {
//     console.log("File Permission", $(this).text());
//     }
//     if (index % 3 == 2) {
//       console.log("File Type", $(this).text());
//     }
//   });
// }

function parseBody(data){
  console.log("In parseBody")
  $ = cheerio.load(data);
  $('tr').each(function(index, element){
    console.log("File Permission", $(this).children().first().text());
    console.log("Absolute Link", $(this).find('a').attr('href'));
    console.log("File Type", $(this).children().last().text());
  });
  // $('tr td a').each(function(index, element){
  //   console.log("Absolute Link", $(this).attr('href'));
  // });
}












