
// creat a questions object that holds questions and answers

// set a timer to start when you click begin
var i = 60;
var answers = [];
var correct = 0;
var incorrect = 0;

function startTimer() {

    var countdownTimer = setInterval(function() {

        i = i - 1;
        $(".timeleft").text("Time Left: " + i + " seconds left");


        if (i <= 0) {
            clearInterval(countdownTimer);
            $(".game").html(
                "<h1> Game over Dude </h1>",
            )
        }

    }, 1000);

}

startTimer(); 

// run function to display questions on html
$(".btn").on("click", function(){
    var haha = $(this).val();
    answers.push(haha);

    console.log(answers);
});

function checker (){
    for (i=0; i<answers.length; i++){
        if(answers[i] === "true"){
            correct++;
        }
        else {
            incorrect++;
        }
    }

};

$(".submit").on("click", function(){
    checker();
    clearInterval(i + 1);
    $(".questions").html(
        "<h1> Correct: " + correct + "</h1>",
        "<h1> Wrong: " + incorrect + "</h1>",
    );
})
// privide input fields for user, store user input

// if timer runs out run end game function
// check if users input === object.answers
// if user input === object answer right ++
// else wrong ++
// display total correct, total wrong

