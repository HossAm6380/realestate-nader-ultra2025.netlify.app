function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === "admin" && password === "123456") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "week.html";
  } else {
    error.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
  }
}
