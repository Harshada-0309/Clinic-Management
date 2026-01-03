const patientBtn = document.getElementById("patientBtn");
const doctorBtn = document.getElementById("doctorBtn");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

// Role switch
patientBtn.addEventListener("click", () => {
  patientBtn.classList.add("active");
  doctorBtn.classList.remove("active");
});

doctorBtn.addEventListener("click", () => {
  doctorBtn.classList.add("active");
  patientBtn.classList.remove("active");
});

// Show / hide password
togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});
