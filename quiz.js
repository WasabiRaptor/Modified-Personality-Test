quizPoints  = [];
personalityTypes =
  ["Bold", "Brave", "Calm", "Docile",
  "Hardy", "Hasty", "Impish", "Jolly",
  "Lonely", "Naive", "Quiet", "Quirky",
  "Rash", "Relaxed", "Sassy", "Timid"];

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