const btn = document.querySelector(".btn");
const input = document.querySelector("#message");

const createTemplate = (e) => {
  e.preventDefault();
  let template = input.value;
  let content = document.querySelector(".message-content");
  let alert = document.querySelector(".alert");
  let container = document.querySelector(".message-container");
  let heading = document.querySelector(".js-message");
  content.textContent = template;

  const hideAlert = () => {
    alert.style.display = "none";
  };

  if (template === (template = "")) {
    content.style.display = "none";
    alert.style.display = "block";
    setTimeout(hideAlert, 2000);
  } else {
    content.style.display = "block";
  }
};

btn.addEventListener("click", createTemplate);
