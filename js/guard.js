const role = localStorage.getItem("userRole");

if (!role) {
  window.location.href = "login.html";
}
