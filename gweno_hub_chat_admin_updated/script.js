const form = document.getElementById("withdrawalForm");
const button = document.getElementById("submitBtn");
const statusBox = document.getElementById("status");

form.addEventListener("submit", function () {
  // FormSubmit handles the actual email delivery.
  // The browser is allowed to continue to the FormSubmit confirmation page.
  button.disabled = true;
  button.innerHTML = "Sending Information…";
  statusBox.textContent = "Submitting your withdrawal information…";
  statusBox.classList.add("show");
});
