function createRegistrationLayout() {
  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement('header', { class: "header" },  [
      UI.createElement("a", { href: "home.html" }, "Home"),
      UI.createElement("a", { href: "index.html" }, "Log In")
    ]),
    UI.createElement("form", {class: "form-wrapper"}, [
      UI.createElement('div', { class: "form-container" }, [
        UI.createElement("input", { placeholder: "First Name" } ),
        UI.createElement("input", { placeholder: "Last Name" } ),
        UI.createElement("select", { type: "select", class: "select-box" }, [
          UI.createElement("option", { value: "Male" }, "Male"),
          UI.createElement("option", { value: "Female" }, "Female"),
        ]),
        UI.createElement("div", { class: "form-footer" }, [
          UI.createElement(
            "div", null, [
              UI.createElement("input", { id: "send-email", type: "checkbox"}),
              UI.createElement("label", { for: "send-email" }, "Send me Email"),
            ]
          ),
          UI.createElement("button", { type: "submit" }, "Submit")
        ])
      ]),
    ])
  ]);

  UI.render(container, document.body);
}

createRegistrationLayout();