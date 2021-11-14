const registerFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-login").value.trim();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to register");
    }
  }
};

document
  .querySelector(".register-form")
  .addEventListener("submit", registerFormHandler);
