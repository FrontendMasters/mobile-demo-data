#!/usr/bin/env node

var fs = require('fs');

let text = fs.readFileSync('./data/movies.json', 'utf8');
let movies = JSON.parse(text);

for (key in movies) {
  let movie = movies[key];
  let text = JSON.stringify(movie, null, 2);

  fs.writeFileSync(`./data/movies/${movie.id}.json`, text);
}
