window.onload = function () {
   show(0);
}

function submitForm(e){
  e.preventDefault();
  let name = document.getElementById('name').value;
  sessionStorage.setItem("name", name);
  location.href = "quiz.html";
}



let questions = [
    {
      id: 1,
      question: "What is the full form of DOM ?",
      answer:"Document Object Manipulation",
      options:[
        "Definition Object Models",
        "Device Object Models",
        "Document Object Manipulation",
        "None Of These"
      ]
    },
    {
      id: 2,
      question: "What is the full form CPU?",
      answer:"Central Processing Unit",
      options:[
        "Central Processing Unit",
        "Central Programming Unit",
        "Central Power Unit",
        "None Of These"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail ?",
      answer:"Electronic Mail",
      options:[
        "Electric Mail",
        "Electronic Mail",
        "Engine Mail",
        "None Of These"
      ]
    },
]


let question_num = 0;
let score = 0

function next(){

  let user_answer = document.querySelector("li.options.active").innerHTML;

  
  if (user_answer == questions[question_num].answer) {
     score += 10;
     sessionStorage.setItem("score",score);
  }

  
  if (question_num == questions.length - 1) {
       sessionStorage.setItem("user_time", `${minute} minutes and ${second} seconds`);
       clearInterval(timer);
      location.href = "end.html";
    
    return;
 } 
    
     question_num++;
     show(question_num);

    
}




function show(e){
    let question = document.getElementById("questions");
     question.innerHTML =
      `<h2> ${questions[e].question} </h2>
      <ul class="option">
      <li class="options">${questions[e].options[0]}</li>
      <li class="options">${questions[e].options[1]}</li>
      <li class="options">${questions[e].options[2]}</li>
      <li class="options">${questions[e].options[3]}</li>
    </ul>
     ` 
     activeoption()
}



function activeoption() {
    let options = document.querySelectorAll("li.options");
     
    for (let i = 0; i < options.length; i++) {
       options[i].onclick = function(){
         for (let j = 0; j < options.length; j++) {
           if (options[j].classList.contains("active")) {
             options[j].classList.remove("active")
           }
         }
         options[i].classList.add("active")
       }
      
    }
}

let name = sessionStorage.getItem("name");
let scores = sessionStorage.getItem("score");
 let times = sessionStorage.getItem("user_time");

document.querySelector(".name").innerHTML = name;
document.querySelector(".point").innerHTML = scores;
document.querySelector(".time").innerHTML = times;





