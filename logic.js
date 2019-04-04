

var time = 31;
var questionIndex = 0
var correct = 0
var incorrect = 0
var unanswered = 0
var intervalId;



var test = [
    {optionOne: "<button class='options clear' value='middle'>middle</button>",
    optionTwo: "<button class='options clear' value='index'>index</button>", 
    optionThree: "<button class='options  clear' value='ring'>ring</button>", 
    optionFour: "<button class='options clear' value='pink'>pinky</button>",},
    
    {optionOne: "<button class='options clear' value='vertebrae'>Vertebrae</button>",
    optionTwo: "<button class='options clear' value='toe'>Toe</button>",
    optionThree: "<button class='options clear' value='ear'>Ear</button>",
    optionFour: "<button class='options clear' value='tail'>Tail</button>",},

    {optionOne: "<button class='options clear' value='turtle'>Turtle</button>",
    optionTwo: "<button class='options clear' value='elephant'>Elephant</button>", 
    optionThree: "<button class='options  clear' value='koala'>Koala</button>", 
    optionFour: "<button class='options clear' value='giraffe'>Giraffe</button>",},
    
    {optionOne: "<button class='options clear' value='32'>32</button>",
    optionTwo: "<button class='options clear' value='48'>48</button>", 
    optionThree: "<button class='options  clear' value='36'>36</button>", 
    optionFour: "<button class='options clear' value='42'>42</button>",},

    {optionOne: "<button class='options clear' value='mercury'>Mercury</button>",
    optionTwo: "<button class='options clear' value='jupiter'>Jupiter</button>", 
    optionThree: "<button id='yellow' class='options  clear' value='venus'>Venus</button>", 
    optionFour: "<button id='blue' class='options clear' value='mars'>Mars</button>",},]

var questions = [
    {question: "<p class='q clear'>Which nail grows the fastest?</p>",
    answer: "middle",},
    
    {question: "<p class='q clear'>Where is the smallest bone in the body?</p>",
    answer: "ear",},
    
    {question: "<p class='q clear'>Which is the only mammal that can’t jump?</p>",
    answer: "elephant",},
    
    {question: "<p class='q clear'>How many dots are there on two dice?</p>",
    answer: "42",},
    
    {question: "<p class='q clear'>Which planet is nearest the sun?</p>",
    answer: "mercury",},
]

// for (key in test2) {
//     value = test2[key]
//     console.log(value[1])
// }


$("#start").on("click", function(){
    $("#start").remove()
    setTimeout(start, 1000)
    count()
    $("#optionOne").append(test[questionIndex].optionOne)
    $("#optionTwo").append(test[questionIndex].optionTwo)
    $("#optionThree").append(test[questionIndex].optionThree)
    $("#optionFour").append(test[questionIndex].optionFour)
})

$(document).ready($(document).on("click", "#startOver", function() {
    location.reload()
}))

$(document).ready($(document).on("click", ".options", function() {
    guess = $(this).val()
    console.log($(this).val())
    console.log(questionIndex)

    
    if (guess == questions[questionIndex].answer) {
        console.log("yes")
        correct++
        questionIndex++
        if(questionIndex == test.length) {
            clearInterval(intervalId)
            $(".clear").remove()
            $("#display").append("<p class'clear'>Correct: " + correct + " </p>")
            $("#display").append("<p class'clear'>Incorrect: " + incorrect + " </p>")
            $("#display").append("<p class'clear'>Unanswered: " + unanswered + " </p>")
            $("#display").append("<button id='startOver'>StartOver</button>")


        } else{
            $(".clear").remove()
            $("#display").append("<h1 class='clear'>You guess correct!</h1>")
            setTimeout(next, 2000)
        }
        
    } else if (guess !== questions[questionIndex].answer){
        incorrect++
        questionIndex++
        if(questionIndex == test.length) {
            clearInterval(intervalId)
            $(".clear").remove()
            $("#display").append("<p class'clear'>Correct: " + correct + " </p>")
            $("#display").append("<p class'clear'>Incorrect: " + incorrect + " </p>")
            $("#display").append("<p class'clear'>Unanswered: " + unanswered + " </p>")
            $("#display").append("<button id='startOver'>StartOver</button>")
        } else {
            $(".clear").remove()
            $("#display").append("<h1 class='clear'>You guessed wrong!</h1>")
            setTimeout(next, 2000)
        }
    }else if(time == 0){
        unanswered++
        questionIndex++
        if(questionIndex == test.length) {
            clearInterval(intervalId)
            $(".clear").remove()
            $("#display").append("<p class'clear'>Correct: " + correct + " </p>")
            $("#display").append("<p class'clear'>Incorrect: " + incorrect + " </p>")
            $("#display").append("<p class'clear'>Unanswered: " + unanswered + " </p>")
            $("#display").append("<button id='startOver'>StartOver</button>")
        } else {
            $(".clear").remove()
            $("#display").append("<h1 class='clear'>You ran out of time!</h1>")
            setTimeout(next, 3000)
        }
       
    }
}))

function start() {
    intervalId = setInterval(count, 1000)
}

function count() {
    time--
    $("#timer").html("<p class='clear'>" + "Time remaining: " + time + " seconds" + "</p>")
}

function questionUpdate() {
    $(".clear").remove()
    $("#question").html(questions[questionIndex].question)
    
    $("#optionOne").html(test[questionIndex].optionOne)
    $("#optionTwo").html(test[questionIndex].optionTwo)
    $("#optionThree").html(test[questionIndex].optionThree)
    $("#optionFour").html(test[questionIndex].optionFour)
}

function next() {
    clearInterval(intervalId);
    time = 31
    intervalId = setInterval(count, 1000)
    time--
    $("#timer").html("<p class='clear'>" + "Time remaining: " + time + " seconds" + "</p>")
    $(".clear").remove()
    $("#question").html(questions[questionIndex].question)
    
    $("#optionOne").html(test[questionIndex].optionOne)
    $("#optionTwo").html(test[questionIndex].optionTwo)
    $("#optionThree").html(test[questionIndex].optionThree)
    $("#optionFour").html(test[questionIndex].optionFour)}