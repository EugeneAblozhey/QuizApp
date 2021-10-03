var userForm = document.querySelector('#start-question');
var avatarContainer = document.querySelector('#smile');
var userData = ['Joe', 'avatar'];
var questionBox = document.querySelector('#box-questions');
var questionForm = document.querySelector('.quiz-form');
var correctAnswers = ['B', 'D', 'B', 'A', 'C', 'D', 'B'];
var resultContainer = document.querySelector('.quiz__heading');
var buttonPrev = document.querySelector('.button_prev');
var buttonNext = document.querySelector('.button_next');
var quizBoxes = document.querySelectorAll('.quiz-form__quiz');
var buttonSubmit = document.querySelector('input[value="Submit"]');
console.log(buttonSubmit);

avatarContainer.addEventListener('click', function(e){
    if(document.querySelectorAll('.show')){
        document.querySelectorAll('.show').forEach(function(item){
            item.classList.remove('show');
        })
    }

    if(e.target.tagName === 'INPUT'){
        e.target.previousElementSibling.firstElementChild.classList.add('show');
    }
})

userForm.addEventListener('submit', function(e){
    var activeAvatar = document.querySelector('input[name="question2"]:checked');
    var activeIMG = activeAvatar.previousElementSibling.firstElementChild.src;
    var activeName = userForm.elements.question1.value;
    if(!activeName){
        activeName = 'Player';
    }
    userData = [activeName, activeIMG];
    userForm.classList.add('quiz');
    questionBox.classList.remove('quiz');
    buttonPrev.classList.add('quiz');
    scrollUp();
    e.preventDefault();
})

questionForm.addEventListener('submit', function(e){
    var userInfo = document.querySelector('.name__user');
    var count = 0;
    var startRes = 0;
    var userAnswers = [
        questionForm.elements.q1,
        questionForm.elements.q2,
        questionForm.elements.q3,
        questionForm.elements.q4,
        questionForm.elements.q5,
        questionForm.elements.q6,
        questionForm.elements.q7
    ];

    userAnswers.forEach(function(item, index){
        if(item.value === correctAnswers[index]){
            count += 1;
            for(var i = 0; i < item.length; i++){
                var isCheked = item[i].checked;
                if(isCheked){
                    item[i].parentElement.classList.add('correct');
                }
            }
        }else{
            for(var i = 0; i < item.length; i++){
                var isCheked = item[i].checked;
                if(isCheked){
                    item[i].parentElement.classList.add('wrong');
                }
            }
        }

        buttonSubmit.classList.add('quiz');
        buttonPrev.classList.add('quiz');
    })

    resultContainer.classList.remove('quiz__heading');
    userInfo.innerHTML = userData[0] + ' ' + '<img src=" ' + userData[1] + ' " alt="user">' + ' ' + count;

    for(var i = 0; i < quizBoxes.length; i++){
        if(quizBoxes[i].classList.contains('quiz')){
            quizBoxes[i].classList.remove('quiz');
        }
    }
    e.preventDefault();
    scrollUp();  
})

buttonNext.addEventListener('click', function(){
    for(var i = 0; i < quizBoxes.length; i++){
        if(!quizBoxes[i].classList.contains('quiz')){
            var currentQuiz = quizBoxes[i];
            buttonPrev.classList.remove('quiz');
        }
    }

    if(currentQuiz.nextElementSibling.className != 'nav_block'){
        currentQuiz.classList.add('quiz');
        currentQuiz.nextElementSibling.classList.remove('quiz');
    }

    if(currentQuiz.nextElementSibling.nextElementSibling.className === 'nav_block'){
        buttonNext.classList.add('quiz');
        buttonSubmit.classList.remove('quiz');
    }   
})

buttonPrev.addEventListener('click', function(){
    for(var i = 0; i < quizBoxes.length; i++){
        if(!quizBoxes[i].classList.contains('quiz')){
            var currentQuiz = quizBoxes[i];
        }
    }

    if(currentQuiz.previousElementSibling != null){
        currentQuiz.previousElementSibling.classList.remove('quiz');
        currentQuiz.classList.add('quiz'); 
        buttonNext.classList.remove('quiz');
    }
    if(currentQuiz.previousElementSibling.previousElementSibling === null){
        buttonPrev.classList.add('quiz');
    }
    if(currentQuiz.nextElementSibling.nextElementSibling.className != 'nav_block' && !buttonSubmit.classList.contains('quiz')){
        buttonSubmit.classList.add('quiz');
    }
    
})

function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}








