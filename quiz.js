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

pokemon = [
    [NaN, "Squirtle", "Turtwig"], //Bold
    ["Charmander", NaN, "Pikachu"],//Brave
    ["Chikorita", "Cyndaquil", NaN,],//Calm
    ["Bulbasaur", NaN, "Charmander"],//Docile
    [NaN,"Treeko", "Torchic"],//Hardy
    ["Pikachu", NaN, "Shinx"],//Hasty
    ["Chimchar", "Piplup", NaN],//Impish
    ["Eevee", NaN, "Totodile"],//Jolly
    [NaN, "Bulbasaur", "Mudkip"],//Lonely
    ["Skitty", NaN, "Chimchar"],//Naive
    ["Chickorita", "Treeko", NaN],//Quiet
    ["Squirtle", NaN, "Piplup"],//Quirky
    [NaN, "Torchic", "Mudkip"],//Rash
    ["Vulpix", NaN, "Phanphy"],//Relaxed
    ["Riolu", "Totodile", NaN],//Sassy
    ["Cyndaquil", NaN, "Turtwig"]//Timid
]


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
  let majorPersonality = quizPoints[1][1]
  let minorPersonality = quizPoints[2][1]
  let chosenPokemon = pokemon[majorPersonality][minorPersonality];
  document.getElementById("you").textContent = chosenPokemon;
  divResults.style.display = "block";
}