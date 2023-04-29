const showBtn = document.getElementById("eye");
const pass = document.getElementById("input");

showBtn.onclick = () => {
  console.log("Clicked");
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
};

const eyeicon = document
  .querySelector(".fa-eye")
  .classList.toggle("fa-eye-slash");
