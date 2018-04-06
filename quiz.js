quizPoints  = [];
personalityTypes =
  ["Bold",    //1
  "Brave",    //2
  "Calm",     //3
  "Docile",   //4
  "Hardy",    //5
  "Hasty",    //6
  "Impish",   //6
  "Jolly",    //8
  "Lonely",   //9
  "Naive",    //10
  "Quiet",    //11
  "Quirky",   //12
  "Rash",     //13
  "Relaxed",  //14
  "Sassy",    //15
  "Timid"];   //16

pokemonTypes =
  ["Bulbasaur", //1 
  "Charmander", //2
  "Squirtle",   //3
  "Chickorita", //4
  "Cyndaquil",  //5
  "Totodile",   //6
  "Treeko",     //7
  "Torchic",    //8
  "Mudkip",     //9
  "Turtwig",    //10
  "Chimchar",   //11
  "Piplup",     //12
  "Snivy",      //13
  "Tepig",      //14
  "Oshawott",   //15
  "Chespin",    //16
  "Fennekin",   //17
  "Froakie",    //18
  "Rowlet",     //19
  "Litten",     //20
  "Popplio",    //21
  "Pikachu",    //22
  "Vulpix",     //23
  "Eevee",      //24
  "Meowth",     //25
  "Psyduck",    //26
  "Machop",     //27
  "Cubone",     //28
  "Phanphy",    //29
  "Skitty",     //30
  "Shinx",      //31
  "Munchlax",   //32
  "Riolu",      //33
  "Axew",       //34
  "Magnemite",  //35
  "Bellsprout", //36
  "Mareep",     //37
  "Sentret",    //38
  "Poochyena",  //39
  "Aron",       //40
  "Budew",      //41
  "Gible",      //42
  "Klink",      //43
  "Deino",      //44
  "Flabebe",    //45
  "Espurr",     //46
  "Grubbin",    //47
  "Rockruff",   //48
  "Zubat",      //49
  "Caterpie"];  //50

function pokemonDecide(points) {

}

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
  for (var i = 0; i < 16; i++) {
    quizPoints = quizPoints.concat([[personalityTypes[i], 0]]);
  }
  nextQuestion(0);
}

function results() {
  divQuestion.style.display = "none";
  divAnswer.style.display = "none";
  quizPoints.sort(function(a,b) {return a[1] - b[1]});
  for (var i = 15; i >= 0; i--) {
    result = document.createElement("span");
    result.textContent = quizPoints[i][0] + ": " + quizPoints[i][1];
    divResults.append(result);
    result = document.createElement("div");
    divResults.append(result);
    result.style.width = ((quizPoints[i][1] + 1) / (quizPoints[15][1] + 1) * 500) + "px";
  }
  document.getElementById("you").textContent = quizPoints[15][0];
  divResults.style.display = "block";
}