let score = 0;

function showScore(){
    const totalScore = document.getElementById('score-message');
    
    if(score === 3) {
        totalScore.innerHTML = score + "points：Perfect!"
    } else if(score === 2) {
        totalScore.innerHTML = score + "points：Great！";
    } else if(score === 1) {
        totalScore.innerHTML = score + "point：Good job!";
    } else {
        totalScore.innerHTML = score + "point：Try again";
    }   
}

const correct = 'correct';
const incorrect = 'incorrect';

function answerQuiz1() {
    const quiz_1 = document.getElementById('quiz-1');
    const select = 'Q1：' + quiz_1.answer.value + 'choose';

    if (quiz_1.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);
    } else if (quiz_1.answer.value == 'b') {
        score++;
        console.log(select);
        console.log(correct);
    } else {
        alert('Qrick your answer in Q1.');
    }
    console.log('nowScore：' + score); 
}


function answerQuiz2(){
    const quiz_2 = document.getElementById('quiz-2');
    const select = 'Q2：' + quiz_2.answer.value + 'choose';

    if (quiz_2.answer.value == 'a') {
        score++;
        console.log(select);
        console.log(correct);
    } else if (quiz_2.answer.value == 'b') {    
        console.log(select);
        console.log(incorrect);
    } else {
        alert('Qrick your answer in Q2.');
    }
    console.log('nowScore：' + score); 
  
}


function answerQuiz3(){
    const quiz_3 = document.getElementById('quiz-3');
    const select = 'Q3：' + quiz_3.answer.value + 'choose';

    if (quiz_3.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);
    } else if (quiz_3.answer.value == 'b') {        
        console.log(select);
        console.log(incorrect);
    }  else {
        alert('Qrick your answer in Q3.');
    }
    console.log('nowScore：' + score); 
}


const correct = 'correct';
const incorrect = 'incorrect';


let score = 0;

function showScore(){
    const totalScore = document.getElementById('score-message');
    
    if(score === 3) {
        totalScore.innerHTML = score + "points：Perfect!"
    } else if(score === 2) {
        totalScore.innerHTML = score + "points：Great！";
    } else if(score === 1) {
        totalScore.innerHTML = score + "point：Good job!";
    } else {
        totalScore.innerHTML = score + "point：Try Again!";
    }   
}

const correct = 'correct';
const incorrect = 'incorrect';

function answerQuiz1() {
    const quiz_1 = document.getElementById('quiz-1');
    const select = 'Q1：' + quiz_1.answer.value + 'choose';

    if (quiz_1.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);

    } else if (quiz_1.answer.value == 'b') {
        score++;
        console.log(select);
        console.log(correct);
    } else {
        alert('Qrick your answer in Q1.');
    }
    console.log('nowScore：' + score); 
}

function answerQuiz2(){
    const quiz_2 = document.getElementById('quiz-2');
    const select = 'Q2：' + quiz_2.answer.value + 'choose';

    if (quiz_2.answer.value == 'a') {
        score++;
        console.log(select);
        console.log(correct);
    } else if (quiz_2.answer.value == 'b') {    
        console.log(select);
        console.log(incorrect);
    } else {
        alert('Qrick your answer in Q2.');
    }
    console.log('nowScore：' + score); 
}

function answerQuiz3(){
    const quiz_3 = document.getElementById('quiz-3');
    const select = 'Q3：' + quiz_3.answer.value + 'choose';

    if (quiz_3.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);
    } else if (quiz_3.answer.value == 'b') {        
        console.log(select);
        console.log(incorrect);
    }  else {
        alert('Qrick your answer in Q3.');
    }
    console.log('nowScore：' + score); 
}

const correct = 'correct';
const incorrect = 'incorrect';

function answerQuiz1() {

    const quiz_1 = document.getElementById('quiz-1');
    const select = 'Q1：' + quiz_1.answer.value + 'choose';

    if (quiz_1.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);

    } else if (quiz_1.answer.value == 'b') {
        score++;
        console.log(select);
        console.log(correct);
    }  else {
        alert('Qrick your answer.');
    }
    console.log('nowScore：' + score); 
}

function answerQuiz2(){

    const quiz_2 = document.getElementById('quiz-2');
    const select = 'Q2：' + quiz_2.answer.value + 'choose';
    
    if (quiz_2.answer.value == 'a') {
        score++;
        console.log(select);
        console.log(correct);
    } else if (quiz_2.answer.value == 'b') {    
        console.log(select);
        console.log(incorrect);
    } else {
        alert('Qrick your answer in Q2.');
    }
    console.log('nowScore：' + score); 
}

function answerQuiz3(){
    const quiz_3 = document.getElementById('quiz-3');
    const select = 'Q3：' + quiz_3.answer.value + 'choose';

    if (quiz_3.answer.value == 'a') {
        console.log(select);
        console.log(incorrect);
    } else if (quiz_3.answer.value == 'b') {        
        console.log(select);
        console.log(incorrect);
  
    } else if (quiz_3.answer.value == 'b') {
        score++;
        console.log(select);
        console.log(correct);
    } else {
        alert('Qrick your answer in Q3.');
    }
    console.log('nowScore：' + score); 
}