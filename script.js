document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    const goBack = document.getElementById("goBack");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const page = button.getAttribute("data-page");
            window.location.href = page;
        });
    });

    if (goBack) {
        goBack.addEventListener("click", function (e) {
            e.preventDefault();
            history.back();
        });
    }
});