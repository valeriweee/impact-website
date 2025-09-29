const button = document.querySelector(".requestBtn");

button.addEventListener("click", () => {
    button.textContent = "Your request has been submitted!";

    setTimeout(() => {
        button.textContent = "Request";
    }, 3000);
});