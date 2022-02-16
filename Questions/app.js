// using selectors inside the element
// traversing the dom
/*

Solution using traversing the DOM
1
const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        // Search for the parent 
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
});

*/

/* Solution using selectors inside the element */

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if(item != question){
                item.classList.remove("show-text");
            }   
        })
        question.classList.toggle("show-text");
    })
})