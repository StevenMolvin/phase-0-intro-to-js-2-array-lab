// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
  cats.shift("Bob");
}
function appendCat() {
  let cat = cats.slice();
  cat.push("Broom");

  return cat;
}
function prependCat(name){
    let cat=cats.slice();
     cat.unshift(name)
     return cat;
 }
 function removeLastCat(){
    let cat=cats.slice();
    cat.pop();
    return cat;  
}
function removeFirstCat(){
    let cat=cats.slice();
    cat.shift();
    return cat;
}