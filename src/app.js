/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let j = 0; j < noun.length; j++) {
        for (let y = 0; y < extension.length; y++) {
          console.log(pronoun[i] + adj[x] + noun[j] + extension[y]);
        }
      }
    }
  }
};
