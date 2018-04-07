quizPoints  = [];
personalityTypes =
  //["Bold",    //1     1, 3, 15, 21, 33, 35, 47, 49
  //"Brave",    //2     2, 22, 27, 31, 39, 42
  //"Calm",     //3     4, 5, 13, 43, 46, 48, 49
  //"Docile",   //4     1, 2, 29, 43
  //"Hardy",    //5     7, 8, 16, 27, 32, 34, 40, 48
  //"Hasty",    //6     22, 30, 31, 34, 40, 45
  //"Impish",   //7     11, 12, 15, 28, 36
  //"Jolly",    //8     6, 19, 24, 38, 45, 50
  //"Lonely",   //9     9, 18, 19, 26, 28, 37
  //"Naive",    //10    11, 17, 21, 24, 30
  //"Quiet",    //11    4, 7, 23, 35, 36, 42
  //"Quirky",   //12    3, 12, 17, 25, 44, 46
  //"Rash",     //13    8, 9, 18, 20, 44
  //"Relaxed",  //14    14, 23, 26, 29, 32, 37, 50
  //"Sassy",    //15    6, 13, 20, 25, 33, 41, 47
  //"Timid"];   //16    5, 10, 14, 16, 38, 39, 41

  ["Bulbasaur", //1   lonely docile
  "Charmander", //2   docile brave
  "Squirtle",   //3   quirky bold
  "Chickorita", //4   calm quiet
  "Cyndaquil",  //5   timid calm
  "Totodile",   //6   jolly sassy
  "Treeko",     //7   quiet hardy
  "Torchic",    //8   hardy rash
  "Mudkip",     //9   rash lonely
  "Turtwig",    //10  bold timid
  "Chimchar",   //11  naive impish
  "Piplup",     //12  impish quirky
  "Snivy",      //13  calm sassy
  "Tepig",      //14  relaxed timid
  "Oshawott",   //15  bold impish
  "Chespin",    //16  timid hardy
  "Fennekin",   //17  naive quirky
  "Froakie",    //18  lonely rash
  "Rowlet",     //19  lonely jolly
  "Litten",     //20  sassy rash
  "Popplio",    //21  bold naive
  "Pikachu",    //22  brave hasty
  "Vulpix",     //23  relaxed quiet
  "Eevee",      //24  jolly naive
  "Meowth",     //25  quirky sassy
  "Psyduck",    //26  relaxed lonely
  "Machop",     //27  brave hardy
  "Cubone",     //28  lonely impish
  "Phanphy",    //29  relaxed docile
  "Skitty",     //30  hasty naive
  "Shinx",      //31  hasty brave
  "Munchlax",   //32  relaxed hardy
  "Riolu",      //33  sassy bold
  "Axew",       //34  hardy hasty
  "Magnemite",  //35  quiet bold
  "Bellsprout", //36  quiet impish
  "Mareep",     //37  relaxed lonely
  "Sentret",    //38  jolly timid
  "Poochyena",  //39  brave timid
  "Aron",       //40  hardy hasty
  "Budew",      //41  timid sassy
  "Gible",      //42  quiet brave
  "Klink",      //43  docile calm
  "Deino",      //44  quirky rash
  "Flabebe",    //45  jolly hasty
  "Espurr",     //46  calm quirky
  "Grubbin",    //47  sassy bold
  "Rockruff",   //48  hardy calm
  "Zubat",      //49  calm bold
  "Caterpie"];  //50  jolly relaxed



function nextQuestion(n) {
  if (n < questions.length) {
    divQuestion.textContent = questions[n].q;
    divAnswer.innerHTML = "";
    for (var a in questions[n].a){
      //console.log(questions[n].a[a]);
      answer = document.createElement("div");
      divAnswer.append(answer);
      answer.textContent = questions[n].a[a].text;
      answer.onclick = answerClick(questions[n].a[a].points, n);
    }
  } else {
    results();
  }
}

function answerClick(points,n) {
  return function() {
    choose(points);
    nextQuestion(n+1);
  };
}

function choose(points) {
  console.log(points);
  for (var n in points){
    quizPoints[points[n]-1][1]++;
  }
}

function begin() {
  divQuestion = document.getElementById("question");
  divAnswer   = document.getElementById("answers" );
  divResults  = document.getElementById("results" );
  document.getElementById("begin").style.display = "none";
  divQuestion.style.display = "block";
  divAnswer.style.display = "flex";
  quizPoints  = [];
  for (var i = 0; i < 50; i++) {
    quizPoints = quizPoints.concat([[personalityTypes[i], 0]]);
  }
  nextQuestion(0);
}

function results() {
  divQuestion.style.display = "none";
  divAnswer.style.display = "none";
  quizPoints.sort(function(a,b) {return a[1] - b[1]});
  for (var i = 49; i >= 34; i--) {
    result = document.createElement("span");
    result.textContent = quizPoints[i][0] + ": " + quizPoints[i][1];
    divResults.append(result);
    result = document.createElement("div");
    divResults.append(result);
    result.style.width = ((quizPoints[i][1] + 1) / (quizPoints[49][1] + 1) * 500) + "px";
  }
  document.getElementById("you").textContent = quizPoints[49][0];
  divResults.style.display = "block";
}