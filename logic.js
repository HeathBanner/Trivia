
var time = 31;
var questionIndex = 0
var correct = 0
var incorrect = 0
var unanswered = 0
var intervalId;

var test = [
    {optionOne: "<button class='options clear' value='middle'>Middle</button>",
    optionTwo: "<button class='options clear' value='index'>Index</button>", 
    optionThree: "<button class='options  clear' value='ring'>Ring</button>", 
    optionFour: "<button class='options clear' value='pink'>Pinky</button>",},
    
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
    optionThree: "<button class='options  clear' value='venus'>Venus</button>", 
    optionFour: "<button class='options clear' value='mars'>Mars</button>",},

    {optionOne: "<button class='options big clear' value='caspian'>Caspian Sea</button>",
    optionTwo: "<button class='options big clear' value='victoria'>Lake Victoria</button>", 
    optionThree: "<button class='options big clear' value='baikal'>Lake Baikal</button>", 
    optionFour: "<button class='options big clear' value='superior'>Lake Superior</button>",},

    {optionOne: "<button class='options big clear' value='australia'>Australia</button>",
    optionTwo: "<button class='options big clear' value='greenland'>Greenland</button>", 
    optionThree: "<button class='options big clear' value='japan'>Japan</button>", 
    optionFour: "<button class='options big clear' value='madagascar'>Madagascar</button>",},

    {optionOne: "<button class='options clear' value='india'>India</button>",
    optionTwo: "<button class='options clear' value='russia'>Russia</button>", 
    optionThree: "<button class='options  clear' value='chile'>Chile</button>", 
    optionFour: "<button class='options clear' value='moon'>Moon</button>",},

    {optionOne: "<button class='options gardens clear' value='babylon'>Hanging Gardens of Babylon</button>",
    optionTwo: "<button class='options gardens clear' value='monet'>Claude Monet's Garden</button>", 
    optionThree: "<button class='options gardens clear' value='nooch'>Nong Nooch Tropical Botanical Garden</button>", 
    optionFour: "<button class='options gardens clear' value='chateu'>Gardens of Chateau de Villandry</button>",},

    {optionOne: "<button class='options clear' value='halogens'>Halogens</button>",
    optionTwo: "<button class='options clear' value='rose'>Roses</button>", 
    optionThree: "<button class='options  clear' value='tulips'>Tulips</button>", 
    optionFour: "<button class='options clear' value='hyacinth'>Hyacinth</button>",},

    {optionOne: "<button class='options big clear' value='pure'>Pure resonance</button>",
    optionTwo: "<button class='options big clear' value='softly'>To be played softly</button>", 
    optionThree: "<button class='options big clear' value='sound'>Math in sound</button>", 
    optionFour: "<button class='options big clear' value='harmony'>Play on harmony</button>",},

    {optionOne: "<button class='options big clear' value='january'>January 1st 1999</button>",
    optionTwo: "<button class='options big clear' value='may'>May 12th 1954</button>", 
    optionThree: "<button class='options big clear' value='august'>August 23rd 1988</button>", 
    optionFour: "<button class='options big clear' value='december'>December 5th 1976</button>",},

    {optionOne: "<button class='options big clear' value='sutra'>The Diamond Sutra</button>",
    optionTwo: "<button class='options big clear' value='bible'>The Bible</button>", 
    optionThree: "<button class='options big clear' value='quran'>The Quran</button>", 
    optionFour: "<button class='options big clear' value='codex'>The Madrid Codex</button>",},

    {optionOne: "<button class='options clear' value='mars'>Mars</button>",
    optionTwo: "<button class='options clear' value='jupiter'>Jupiter</button>", 
    optionThree: "<button class='options  clear' value='neptune'>Neptune</button>", 
    optionFour: "<button class='options clear' value='uranus'>Uranus</button>",},

    {optionOne: "<button class='options adventurer clear' value='cook'>Captain James Cook</button>",
    optionTwo: "<button class='options adventurer clear' value='polo'>Marco Polo</button>", 
    optionThree: "<button class='options adventurer clear' value='magellan'>Ferdinand Magellan</button>", 
    optionFour: "<button class='options adventurer clear' value='lc'>Lewis & Clark</button>",},
]

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

    {question: "<p class='q clear'>What is the largest freshwater lake in the world?</p>",
    answer: "superior",},

    {question: "<p class='q clear'>What is the world's biggest island?</p>",
    answer: "greenland",},

    {question: "<p class='q clear'>Where would you find the Sea of Tranquility?</p>",
    answer: "moon",},

    {question: "<p class='q clear'>Which garden is considered to be among the Seven Wonders of the Ancient World?</p>",
    answer: "babylon",},

    {question: "<p class='q clear'>Which kind of bulbs were once exchanged as a form of currency?</p>",
    answer: "tulips",},

    {question: "<p class='q clear'>What does the term 'piano' mean?</p>",
    answer: "softly",},

    {question: "<p class='q clear'>When was the euro introduced as legal currency on the world market?</p>",
    answer: "january",},

    {question: "<p class='q clear'>What is the oldest surviving printed book in the world?</p>",
    answer: "sutra",},

    {question: "<p class='q clear'>What was the first planet to be discovered using the telescope, in 1781?</p>",
    answer: "uranus",},

    {question: "<p class='q clear'>Who, after anchoring off Hawaii in 1779, was mistaken for the god Lono?</p>",
    answer: "cook",},
]

$(document).ready($(document).on("click", "#start", function() {
    $("#start").remove()
    start()
    setTimeout(count, 1000)
    $("#timer").html("<p class='clear'>" + "Time remaining: " + 30 + " seconds" + "</p>")
    $("#question").html(questions[questionIndex].question)
    
    $("#optionOne").html(test[questionIndex].optionOne)
    $("#optionTwo").html(test[questionIndex].optionTwo)
    $("#optionThree").html(test[questionIndex].optionThree)
    $("#optionFour").html(test[questionIndex].optionFour)
}))

$(document).ready($(document).on("click", "#startOver", function() {
    clearInterval(intervalId);
    $(".clear").remove()
    $("#head").append("<button id='start' class='clear'>Start</button>")
    time = 31;
    questionIndex = 0
    correct = 0
    incorrect = 0
    unanswered = 0
}))

$(document).ready($(document).on("click", ".options", function() {
    guess = $(this).val()
    console.log($(this).val())
    console.log(questionIndex)

    
    if (guess == questions[questionIndex].answer) {
        console.log("yes")
        correct++
        questionIndex++
        clearInterval(intervalId)
        $(".clear").remove()
        $("#display").append("<h1 class='clear'>You guess correct!</h1>")
        if(questionIndex == test.length) {
            setTimeout(gameover, 2000)
        }else {
            setTimeout(next, 2000)
            setTimeout(start, 2000)
        }
        
    }else if (guess !== questions[questionIndex].answer) {
        incorrect++
        questionIndex++
        clearInterval(intervalId);
        $(".clear").remove()
        $("#display").append("<h1 class='clear'>You guessed wrong!</h1>")
        if(questionIndex == test.length) {
            setTimeout(gameover, 2000)
        }else {
            setTimeout(next, 2000)
            setTimeout(start, 1000)
        }
    }else if(parseInt(time) === 0) {
        unanswered++
        questionIndex++
        clearInterval(intervalId)
        $(".clear").remove()
        $("#display").append("<h1 class='clear'>You ran out of time!</h1>")
        if(questionIndex == test.length) {
            setTimeout(gameover, 2000)
        }else {
            setTimeout(next, 2000)
            setTimeout(start, 2000)
        }
    }
}))

function start() {
    intervalId = setInterval(count, 1000)
}

function count() {
    time--
    $("#timer").html("<p class='clear'>" + "Time remaining: " + time + " seconds" + "</p>")
    if (time < 1) {
        unanswered++
        questionIndex++
        if(questionIndex == test.length) {
            clearInterval(intervalId)
            $(".clear").remove()
            $("#display").append("<h1 class='clear'>You ran out of time!</h1>")
            setTimeout( function() {
                $(".clear").remove()
                $("#display").append("<p class='clear'>Correct: " + correct + " </p>")
                $("#display").append("<p class='clear'>Incorrect: " + incorrect + " </p>")
                $("#display").append("<p class='clear'>Unanswered: " + unanswered + " </p>")
                $("#display").append("<button class='clear' id='startOver'>StartOver</button>")    
            }, 2000)
        }else {
            clearInterval(intervalId)
            $(".clear").remove()
            $("#display").append("<h1 class='clear'>You ran out of time!</h1>")
            setTimeout(next, 2000)
            setTimeout(start, 2000)
        }
    }
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
    $(".clear").remove()
    time = 31
    time--
    $("#timer").html("<p class='clear'>" + "Time remaining: " + time + " seconds" + "</p>")
    $("#question").html(questions[questionIndex].question)
    
    $("#optionOne").html(test[questionIndex].optionOne)
    $("#optionTwo").html(test[questionIndex].optionTwo)
    $("#optionThree").html(test[questionIndex].optionThree)
    $("#optionFour").html(test[questionIndex].optionFour)
}

function gameover() {
    clearInterval(intervalId)
    $(".clear").remove()
    $("#display").append("<p class='clear'>Correct: " + correct + " </p>")
    $("#display").append("<p class='clear'>Incorrect: " + incorrect + " </p>")
    $("#display").append("<p class='clear'>Unanswered: " + unanswered + " </p>")
    $("#display").append("<button class='clear' id='startOver'>StartOver</button>")
}