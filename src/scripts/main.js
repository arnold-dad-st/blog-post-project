function createLoginLayout() {
  const container = document.createElement("div");
  container.setAttribute("class", "container-root");

  const header = document.createElement("header");
  header.setAttribute("class", "header");

  const link = document.createElement("a");
  link.setAttribute("href", "home.html");
  link.innerText = "Home";

  const formWrapper = document.createElement("form");
  formWrapper.setAttribute("class", "form-wrapper");

  const loginContainer = document.createElement("div");
  loginContainer.setAttribute("class", "form-container");

  const form = document.createElement("form");

  const inputUsername = document.createElement("input");
  inputUsername.setAttribute("type", "text");
  inputUsername.setAttribute("placeholder", "Username");

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Password');

  const buttonLogin = document.createElement("button");
  buttonLogin.setAttribute("type", "submit" );
  buttonLogin.innerText = "Login";

  header.appendChild(link);

  // Append elements to the DOM
  form.appendChild(inputUsername);
  form.appendChild(inputPassword);
  form.appendChild(buttonLogin);

  loginContainer.appendChild(form);

  formWrapper.appendChild(loginContainer);

  container.appendChild(header);
  container.appendChild(formWrapper);

  document.body.appendChild(container);
}

createLoginLayout();
