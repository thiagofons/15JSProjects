const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;

    if(id){
        // Remove active from other buttons and adds to the clicked one
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        // Hide other articles
        articles.forEach(function(article){
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});