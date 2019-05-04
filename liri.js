require('dotenv').config();
var fs = require("fs");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var omdbRequest = require("request");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
 
var inputType = process.argv[2];
var entries = process.argv.slice(3);
var request = entries.join(" ");

theInput(inputType, request);

function theInput(inputType, request) {
 if (inputType === "spotify-this-song") {
    if (request === "") {
      findSong("Ace of Base, The Sign");
    } else {
      findSong(request);
    }
  } else if (inputType === "movie-this") {
    if (request === "") {
      findMovie("Mr. Nobody");
    // } else {
    //   findMovie(request);
    // }
  } else {
    DoWhatItSays();
  }
}
}
// Results
function logResults(output) {
  fs.appendFile("log.txt", output, function(err) {
    if (err) throw err;
    console.log(output);
  });
}

function findSong(request) {
  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: "track", query: request }, function(err, data) {
    if (!err) {
      var output =
        "Artist: " +
        data.tracks.items[0].album.artists[0].name +
        "\n" +
        "Song Name: " +
        data.tracks.items[0].name +
        "\n" +
        "Album Name: " +
        data.tracks.items[0].album.name +
        "\n" +
        "Preview URL: " +
        data.tracks.items[0].preview_url +
        "\n\n";

      logResults(output);
    }
  });
}

// OMDB
// function findMovie(request) {
//   var omdbKey = keys.omdbKeys.api_key; //this is wrong! UPDATE
//   var omdbUrl = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + request;

//   omdbRequest.get(omdbUrl, function(err, results, body) {
//     if (!err) {
//       var movieObj = JSON.parse(body);
//       var output =
//         "Title: " +
//         movieObj.Title +
//         "\n" +
//         "Year: " +
//         movieObj.Year +
//         "\n" +
//         "IMDB Rating: " +
//         movieObj.Ratings[0].Value +
//         "\n" +
//         "Rotten Tomatoes Rating: " +
//         movieObj.Ratings[1].Value +
//         "\n" +
//         "Country: " +
//         movieObj.Country +
//         "\n" +
//         "Language: " +
//         movieObj.Language +
//         "\n" +
//         "Plot: " +
//         movieObj.Plot +
//         "\n" +
//         "Actors: " +
//         movieObj.Actors +
//         "\n\n";

//       logResults(output);
//     }
//   });
// }


spotify
    .request ('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data) 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err)
  });

  //  Do What It Says
function DoWhatItSays() {
  fs.readFile("random.txt", function read(err, data) {
    if (err) {
      throw err;
    }
    var lines = data.toString("utf-8").split("\n");
    var randLine = lines[Math.floor(Math.random() * lines.length)];
    var lineArray = randLine.split(",");

    theInput(lineArray[0], lineArray[1]); 
  })
}