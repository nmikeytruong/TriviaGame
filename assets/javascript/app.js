// question variable arrays
var questions = [{
    question: "Which pokemon did Ash Catchem start with?",
    answers: ["Charmander", "Pikachu", "Squirtle", "Bulbasaur"],
    correctAnswer: "Pikachu"
}, {
    question: "What badge type did Brock have to give out?",
    answers: ["Boulder Badge", "Rock Badge", "Stone Badge", "Avalanche Badge"],
    correctAnswer: "Boulder Badge"
}, {
    question: "What's the device trainers use to keep a record of their Pokemon encounters?",
    answers: ["Pokephone", "Pokedex", "Pokefinder", "Poketionary"],
    correctAnswer: "Pokedex"
}, {
    question: "What are the three types of starter Pokemon?",
    answers: ["Psychic, Flying, Ground", "Fighting, Electric, Dragon", "Ghost, Poison, Normal", "Grass, Fire, Water"],
    correctAnswer: "Grass, Fire, Water"
}, {
    question: "What Pokemon type does Misty have?",
    answers: ["Water", "Psychic", "Electric", "Grass"],
    correctAnswer: "Water"
}, {
    question: "Who are the infamous bad guys?",
    answers: ["Cobra Kai", "Hydra", "Cobra Command", "Team Rocket"],
    correctAnswer: "Team Rocket"
}, {
    question: "Who's the puffy singing pokemon that puts others to sleep and draws on their face with a sharpie?",
    answers: ["Jigglypuff", "Puffemon", "Eevee", "Gyrados"],
    correctAnswer: "Jigglypuff"
}, {
    question: "Gotta _____ ____ ___!",
    answers: ["hunt them all", "go home now", "eat a burger", "catch them all"],
    correctAnswer: "catch them all"
}];

// game vaiable holding the game funcions
var game = {
    right: 0,
    wrong: 0,
    counter: 99,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter == 0) {
            console.log("Out of time!");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#body").prepend("<h3>Time Remaining: <span id='counter'>99</span> Seconds</h3>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++){
            $("#body").append("<h3>" + questions[i].question + "</h3>");
            for (var j = 0; j < questions[i].answers.length; j++){
                $("#body").append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "' >" + questions[i].answers[j])
            }
        }
        $("#body").append("<br><button id='end'>DONE</button>")
    },
    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if($(this).val() == questions[0].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if($(this).val() == questions[1].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if($(this).val() == questions[2].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if($(this).val() == questions[3].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if($(this).val() == questions[4].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if($(this).val() == questions[5].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-6']:checked"), function() {
            if($(this).val() == questions[6].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-7']:checked"), function() {
            if($(this).val() == questions[7].correctAnswer) {
                game.right++;                
            } else {
                game.wrong++;
            }
        });
        
        this.result();
    },

    result: function() {
        clearInterval(timer);
        $("#body h3").remove();
        $("#body").html("<h3>Finished!</h3>");
        $("#body").append("<h4>You got " + this.right + " right!</h4>");
        $("#body").append("<h4>You got " + this.wrong + " wrong.</h4>");
        $("#body").append("<h4>You left " + (questions.length - (this.wrong + this.right)) + " unaswered. 0.o</h4>")
    }

}

$("#start").on("click", function() {
    game.start();
})

$(document).on("click", "#end", function() {
    game.done();
})


