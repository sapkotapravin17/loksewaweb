function checkAnswer(button, correct) {

    const result = document.getElementById("result");

    if (correct) {

        result.textContent = "✅ Correct Answer!";

        result.style.color = "green";

    } else {

        result.textContent = "❌ Wrong Answer! Try again.";

        result.style.color = "red";

    }

}


function startQuiz() {

    document
        .getElementById("mcq")
        .scrollIntoView({
            behavior: "smooth"
        });

}