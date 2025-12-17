var Tiles = { "List" : [
  {"label":"Main Dock", "price":"$220", "icon":"", "color":"red", "order": "2", "pos":"top"},
  {"label":"čaamałsaaqapi", "price":"", "icon":"❓", "color":"none", "order": "3", "pos":"top"},
  {"label":"c̓iisapi waap", "price":"$220", "icon":"", "color":"red", "order": "4", "pos":"top"},
  {"label":"kiiyawishƛa waap", "price":"$240", "icon":"", "color":"red", "order": "5", "pos":"top"},
  {"label":"Webster", "price":"$200", "icon":"🚂", "color":"none", "order": "6", "pos":"top"},
  {"label":"t̓iickin maḥtii", "price":"$260", "icon":"", "color":"yellow", "order": "7", "pos":"top"},
  {"label":"new gym", "price":"$200", "icon":"", "color":"yellow", "order": "8", "pos":"top"},
  {"label":"č̓aʔak<br>maḥsa", "price":"$150", "icon":"🚰", "color":"none", "order": "9", "pos":"top"},
  {"label":"skatepark", "price":"$280", "icon":"", "color":"yellow", "order": "10", "pos":"top"},
  {"label":"k’iihxnit", "price":"$200", "icon":"", "color":"orange", "order": "12", "pos":"left"},
  {"label":"ƛ̓aƛ̓ahinkʷuuʔis", "price":"$200", "icon":"", "color":"orange", "order": "15", "pos":"left"},
  {"label":"hinasḥuł maʔas", "price":"", "icon":"💰", "color":"none", "order": "17", "pos":"left"},
  {"label":"qwaacswiis", "price":"$180", "icon":"", "color":"orange", "order": "19", "pos":"left"},
  {"label":"Titian", "price":"$200", "icon":"🚂", "color":"none", "order": "21", "pos":"left"},
  {"label":"chahchumhayyup tiičmis", "price":"$160", "icon":"", "color":"pink", "order": "23", "pos":"left"},
  {"label":"ƛiisałuwił", "price":"$140", "icon":"", "color":"pink", "order": "25", "pos":"left"},
  {"label":"electric company", "price":"$150", "icon":"💡", "color":"none", "order":" 27", "pos":"left"},
  {"label":"ʔuuštaqyučinƛuwił", "price":"$140", "icon":"", "color":"pink", "order": "29", "pos":"left"},
  {"label":"ʔanaḥʔisʔi ƛiisuwił", "price":"$300", "icon":"", "color":"green", "order": "14", "pos":"right"},
  {"label":"ʔiiḥ ƛiisuwił", "price":"$300", "icon":"", "color":"green", "order": "16", "pos":"right"},
  {"label":"hinasḥuł maʔas", "price":"", "icon":"💰", "color":"none", "order": "18", "pos":"right"},
  {"label":"daycare", "price":"$320", "icon":"", "color":"green", "order": "20", "pos":"right"},
  {"label":"Jacob", "price":"$320", "icon":"🚂", "color":"none", "order": "22", "pos":"right"},
  {"label":"čaamałsaaqapi", "price":"", "icon":"❓", "color":"none", "order": "24", "pos":"right"},
  {"label":"wellness center", "price":"$350", "icon":"", "color":"blue", "order": "26", "pos":"right"},
  {"label":"t̓aatn̓aʔis<br/>naḥii", "price":"$100", "icon":"💍", "color":"none", "order": "28", "pos":"right"},
  {"label":"aauuknuk waʔičḥ", "price":"$400", "icon":"", "color":"blue", "order": "30", "pos":"right"},
  {"label":"ʔuuʔaƛuk maʔas", "price":"£120", "icon":"", "color":"sky", "order": "32", "pos":"bottom"},
  {"label":"wikstupmis", "price":"$100", "icon":"", "color":"sky", "order": "33", "pos":"bottom"},
  {"label":"čaamałsaaqapi", "price":"", "icon":"❓", "color":"none", "order": "34", "pos":"bottom"},
  {"label":"č̓aʔak maḥtii", "price":"$100", "icon":"", "color":"sky", "order": "35", "pos":"bottom"},
  {"label":"Joseph", "price":"$200", "icon":"🚂", "color":"none", "order": "36", "pos":"bottom"},
  {"label":"ʔuuštaq<br/>naḥii", "price":"$200", "icon":"🔸", "color":"none", "order": "37", "pos":"bottom"},
  {"label":"maƛił", "price":"£60", "icon":"", "color":"brown", "order": "38", "pos":"bottom"},
  {"label":"hinasḥuł maʔas", "price":"", "icon":"💰", "color":"none", "order": "39", "pos":"bottom"},
  {"label":"ʔink maḥsa", "price":"$60", "icon":"", "color":"brown", "order": "40", "pos":"bottom"}
]};

var tiles = "";

for (var t = 0; t < Tiles.List.length; t++){
tiles += "<div class=\"" + Tiles.List[t].pos + " " + Tiles.List[t].color + "\" style=\"--order:" + Tiles.List[t].order + ";\"><div class=\"inside\"><h2>" + Tiles.List[t].label + "</h2> <span>" + Tiles.List[t].icon + "</span> <strong>" + Tiles.List[t].price + "</strong></div></div>"
}

$(".frame").append(tiles);


$(".table").click(function(){
  if ($(this).hasClass("stop")) {
      $(this).removeClass("stop");
      $(this).addClass("start");
      setTimeout(function(){
        $(".table").addClass("rotation");
      },2000);
  } else if (!$(this).hasClass("stop")) {
      $(this).addClass("hide");
      $(this).addClass("stop");
      setTimeout(function(){
        $(".table").removeClass("hide");
        $(".table").removeClass("start");
        $(".table").removeClass("rotation");
      },2000);
  }
});

//
//

function rollDice() {
  const dice1Element = document.getElementById('dice1');
  const dice2Element = document.getElementById('dice2');

  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  dice1Element.textContent = roll1;
  dice2Element.textContent = roll2;
}

// function convertDiceRollToWords(roll) {
//   const diceWords = {
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six"
//   };
// }
