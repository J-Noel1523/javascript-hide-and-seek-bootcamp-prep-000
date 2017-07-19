function getFirstSelector(selector){
  var hold =  document.querySelector(selector);

  return hold;

}

function nestedTarget(){
  var pulled = document.getElementsByClassName("target");

  return pulled[0];
}

function increaseRankBy(n){
var rank = document.getElementsByClassName("ranked-list");
for(var i = 0; i < rank.length; i++){
  parseInt(rank[i].innerHTML);
   rank[i].innerHTML = (i + n);
  }
}

function deepestChild(){
var hold = document.getElementById("grand-node");
var inners = hold.getElementsByTagName("div");

var pos;

for (var i = 0; i < inners.length; i++){
   pos = inners[i] ;
}
  return pos;
}
