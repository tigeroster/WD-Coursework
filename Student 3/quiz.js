/* START QUIZ BUTTON */
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");

// if startQuiz button clicked
start_btn.onclick = function () {
    info_box.classList.add("activeInfo"); //show info box
}



/* INFO BOX */
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

// if exitQuiz button clicked
exit_btn.onclick = function () {
    info_box.classList.remove("activeInfo"); //hide info box
}

let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


// if continueQuiz button clicked
continue_btn.onclick = function () {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    timeCount.textContent = timeValue
    startTimer(timeValue); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}



/* QUESTION BOX */
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const result_box = document.querySelector(".result_box");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const time_line = document.querySelector("header .time_line");


// getting questions and options from array
function showQuetions(index) {
    const question = document.querySelector(".question");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].question_num + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    question.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// creating the new div tags which for icons
let rightMark = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let wrongMark = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// if user clicked on option
function optionSelected(answer) {
    // clearInterval(counter); //clear counter
    // clearInterval(counterLine); //clear counterLine
    let userInput = answer.textContent; //getting user selected option
    let correctAnswer = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userInput == correctAnswer) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", rightMark); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", wrongMark); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAnswer) { //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", rightMark); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            //add a timeout for hold 2 seconds
            setTimeout(function () {
                console.log("delayed for 2 seconds");
            }, 2000);


            // show result box with users current score
            showResultNotCompleted();

            // const allOptions = option_list.children.length; //getting all option items
            // let correctAnswer = questions[que_count].answer; //getting correct answer from array
            // for (i = 0; i < allOptions; i++) {
            //     if (option_list.children[i].textContent == correctAnswer) { //if there is an option which is matched to an array answer
            //         option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            //         option_list.children[i].insertAdjacentHTML("beforeend", rightMark); //adding tick icon to matched option
            //         console.log("Time Off: Auto selected correct answer.");
            //     }
            // }
            // for (i = 0; i < allOptions; i++) {
            //     option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            // }
            // next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, ((timeValue * 1000) / 550));
    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .question_num");

// if Next Que button clicked
next_btn.onclick = function () {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        // clearInterval(counter); //clear counter
        // clearInterval(counterLine); //clear counterLine
        // startTimer(timeValue); //calling startTimer function
        // startTimerLine(widthValue); //calling startTimerLine function
        // timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}


/* RESULTS BOX */
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 8) { // if user scored more than or equal to 8
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (userScore >= 4) { // if user scored more than or equal to 4 but less than 8
        let scoreTag = '<span>and nice , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 4
        let scoreTag = '<span>and sorry , You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//method if quiz is not completed between time duration
function showResultNotCompleted() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    let temp = result_box.querySelector(".icon");//get icon div
    temp.innerHTML = '<i class="fas fa-stopwatch"></i>';
    const scoreText = result_box.querySelector(".score_text");
    const completedText = result_box.querySelector(".complete_text");
    completedText.innerText = 'You are Unable to Complete the Quiz';
    if (userScore >= 8) { // if user scored more than or equal to 8
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>but congrats! , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if (userScore >= 4) { // if user scored more than or equal to 4 but less than 8
        let scoreTag = '<span>but nice , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else { // if user scored less than 4
        let scoreTag = '<span>and sorry , You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


// if restartQuiz button clicked
restart_quiz.onclick = function () {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 60;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = function () {
    window.location.reload(); //reload the current window
}
