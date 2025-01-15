const button = document.querySelector(".greet-btn");
const back = document.querySelector(".back-btn");

button.addEventListener("click", () => {
  const message = document.querySelector(".greet-message");
  message.style.display = "block";
});

back.addEventListener("click", () => {
  location.reload();
});
