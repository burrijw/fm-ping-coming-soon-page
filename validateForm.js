const form = document.querySelector("form");
const emailField = document.querySelector("#email-address");
const emailErrorMsg = document.querySelector("#email-error-msg");
const submitBtn = document.querySelector("#submit-button");

function setInvalidStyles() {
  emailField.classList.add("border-red");
  emailErrorMsg.classList.remove("hidden");
}

function setValidStyles() {
  emailField.classList.remove("border-red");
  emailErrorMsg.classList.add("hidden");
}

emailField.addEventListener("change", (event) => {
  if (event.target.value && !event.target.validity.valid) {
    setInvalidStyles();
    emailField.setAttribute("aria-invalid", true);
  } else {
    setValidStyles();
    emailField.removeAttribute("aria-invalid");
  }
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    setValidStyles();
    alert("Thanks! The form has been submitted. We'll reach out to you soon!");
  } else {
    setInvalidStyles();
  }
});
