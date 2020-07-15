console.log('welcome vitthal')

window.onload = function () {
    shownextques(0);

}


let questionsar = [
    {
        id: 1,
        question: "The population of india is",
        answer: "13500000000",
        options: [
            "13400000000",
            "13300000000",
            "13200000000",
            "13500000000"
        ]
    },
    {
        id: 2,
        question: "The biggest state in india",
        answer: "MP",
        options: [
            "AP",
            "MH",
            "MP",
            "GJ"
        ]
    },
    {
        id: 3,
        question: "The national bird of india",
        answer: "peocock",
        options: [
            "sparrow",
            "crow",
            "peocock",
            "sparrot"
        ]
    },
    {
        id: 4,
        question: "The national animal of india",
        answer: "lion",
        options: [
            "lion",
            "tiger",
            "pig",
            "horse"
        ]
    }
];


function startquiz(e) {
    e.preventDefault();
    //getting firstname from form
    let name = document.forms["firstform"]["firstname"];
    sessionStorage.setItem("name", name.value);
    //console.log(name.value);
    name.value = "";
    location.href = "quizpage.html";

}

let count = 0;
let marks = 0;
function next1() {

    count++;
    let user_answer = document.querySelector("li.option.active1").innerHTML;
    if (user_answer == questionsar[count - 1].answer) {
        marks += 1;
        sessionStorage.setItem("marks", marks);
        //console.log(marks);
    }

    if (count == questionsar.length) {
        location.href = "finalpage.html";
        return;
    }

    //console.log(user_answer);

    shownextques(count);
    //console.log(count);
}


//inner html of questions using function
function shownextques(count) {
    let question = document.getElementById('questions');
    question.innerHTML = `<h2> Q${questionsar[count].id} ${questionsar[count].question}</h2><ul>
        <li class="option">${questionsar[count].options[0]}</li>
        <li  class="option">${questionsar[count].options[1]}</li>
        <li  class="option">${questionsar[count].options[2]}</li>
        <li  class="option">${questionsar[count].options[3]}</li>
        </ul>`;
    toggleactive();


}

//when it is clicked applying active class on it. 
function toggleactive() {
    let option = document.querySelectorAll('li.option');

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains('active1')) {
                    option[j].classList.remove('active1');
                }
            }
            option[i].classList.add('active1');
        };
    }
}

let name = sessionStorage.getItem("name");
let marks1 = sessionStorage.getItem("marks");

document.querySelector(".name1").innerHTML = name;
document.querySelector(".marks1").innerHTML = marks1;



//timer will be added