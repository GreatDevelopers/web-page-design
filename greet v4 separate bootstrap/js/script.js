document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".greet-btn");
    const back = document.querySelector(".back-btn");
    const message = document.querySelector(".greet-message");
  
    button.addEventListener("click", () => {
      message.classList.remove("d-none"); 
    });
  
    back.addEventListener("click", () => {
      message.classList.add("d-none");
    });
  });
  