var Tiles = { "List" : [
  {"label":"Main Dock", "price":"£220", "icon":"", "color":"red", "order": "2", "pos":"top"},
  {"label":"chance", "price":"", "icon":"❓", "color":"none", "order": "3", "pos":"top"},
  {"label":"Hydro Dock", "price":"£220", "icon":"", "color":"red", "order": "4", "pos":"top"},
  {"label":"Mattie's Dock", "price":"£240", "icon":"", "color":"red", "order": "5", "pos":"top"},
  {"label":"fenchurch st. station", "price":"£200", "icon":"🚂", "color":"none", "order": "6", "pos":"top"},
  {"label":"t-bird hall", "price":"£260", "icon":"", "color":"yellow", "order": "7", "pos":"top"},
  {"label":"new gym", "price":"£200", "icon":"", "color":"yellow", "order": "8", "pos":"top"},
  {"label":"water<br>works", "price":"£150", "icon":"🚰", "color":"none", "order": "9", "pos":"top"},
  {"label":"skatepark", "price":"£280", "icon":"", "color":"yellow", "order": "10", "pos":"top"},
  {"label":"first beach", "price":"£200", "icon":"", "color":"orange", "order": "12", "pos":"left"},
  {"label":"second beach", "price":"£200", "icon":"", "color":"orange", "order": "15", "pos":"left"},
  {"label":"community chest", "price":"", "icon":"💰", "color":"none", "order": "17", "pos":"left"},
  {"label":"third beach", "price":"£180", "icon":"", "color":"orange", "order": "19", "pos":"left"},
  {"label":"marylebone station", "price":"£200", "icon":"🚂", "color":"none", "order": "21", "pos":"left"},
  {"label":"chahchumhayyup tiičmis", "price":"£160", "icon":"", "color":"pink", "order": "23", "pos":"left"},
  {"label":"post office", "price":"£140", "icon":"", "color":"pink", "order": "25", "pos":"left"},
  {"label":"electric company", "price":"£150", "icon":"💡", "color":"none", "order":" 27", "pos":"left"},
  {"label":"clinic", "price":"£140", "icon":"", "color":"pink", "order": "29", "pos":"left"},
  {"label":"elementary", "price":"£300", "icon":"", "color":"green", "order": "14", "pos":"right"},
  {"label":"high school", "price":"£300", "icon":"", "color":"green", "order": "16", "pos":"right"},
  {"label":"community chest", "price":"", "icon":"💰", "color":"none", "order": "18", "pos":"right"},
  {"label":"daycare", "price":"£320", "icon":"", "color":"green", "order": "20", "pos":"right"},
  {"label":"liverpool st. station", "price":"£320", "icon":"🚂", "color":"none", "order": "22", "pos":"right"},
  {"label":"chance", "price":"", "icon":"", "color":"none", "order": "24", "pos":"right"},
  {"label":"wellness center", "price":"£350", "icon":"", "color":"blue", "order": "26", "pos":"right"},
  {"label":"super<br />tax", "price":"£100", "icon":"💍", "color":"none", "order": "28", "pos":"right"},
  {"label":"the lodge", "price":"£400", "icon":"", "color":"blue", "order": "30", "pos":"right"},
  {"label":"operations and maintenace", "price":"£120", "icon":"", "color":"sky", "order": "32", "pos":"bottom"},
  {"label":"transfer station", "price":"£100", "icon":"", "color":"sky", "order": "33", "pos":"bottom"},
  {"label":"chance", "price":"", "icon":"❓", "color":"none", "order": "34", "pos":"bottom"},
  {"label":"water plant", "price":"£100", "icon":"", "color":"sky", "order": "35", "pos":"bottom"},
  {"label":"kings cross station", "price":"£200", "icon":"🚂", "color":"none", "order": "36", "pos":"bottom"},
  {"label":"income<br />tax", "price":"£200", "icon":"🔸", "color":"none", "order": "37", "pos":"bottom"},
  {"label":"RCMP", "price":"£60", "icon":"", "color":"brown", "order": "38", "pos":"bottom"},
  {"label":"community chest", "price":"", "icon":"💰", "color":"none", "order": "39", "pos":"bottom"},
  {"label":"firehall", "price":"£60", "icon":"", "color":"brown", "order": "40", "pos":"bottom"}
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
