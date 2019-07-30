#!/usr/bin/env node

var fs = require('fs');

let text = fs.readFileSync('./deleteme.json', 'utf8');
let films = JSON.parse(text);

for (key in films) {
  let film = films[key];
  let text = JSON.stringify(film, null, 2);

  fs.writeFileSync(`./films/${film.id}.json`, text);
}
