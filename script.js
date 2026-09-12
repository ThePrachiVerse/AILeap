const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const email = String(data.get("email") || "").trim();
  const password = String(data.get("password") || "");

  if (!email || !password) {
    form.reportValidity();
    return;
  }

  const notice = document.getElementById("login-status");
  notice.textContent = "Signed in as " + email;
  notice.hidden = false;
});
