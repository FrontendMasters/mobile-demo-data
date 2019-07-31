#!/usr/bin/env node

var fs = require('fs');

let text = fs.readFileSync('./deleteme.json', 'utf8');
let movies = JSON.parse(text);

for (key in movies) {
  let movie = movies[key];
  let text = JSON.stringify(movie, null, 2);

  fs.writeFileSync(`./movies/${movie.id}.json`, text);
}
