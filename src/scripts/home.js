import UI from "./utils/utils.js";
import { Storage } from "./utils/storage.js";
import { bloggers, posts } from "./data.js";

const state = {
  posts: [],
};

const createNewPost = () => {
  window.location.assign("new-post.html");
};

const createHomeLayout = function () {
  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement(
      "header",
      {
        class: "header",
      },
      [
        UI.createElement("a", { href: "index.html" }, "Log In"),
        UI.createElement("a", { href: "registration.html" }, "Sign Up"),
      ]
    ),
    UI.createElement("main", { class: "main-section" }, [
      UI.createElement("sidebar", { class: "sidebar" }, "nav"),
      UI.createElement("div", { class: "section" }, [
        UI.createElement(
          "section",
          { class: "panel" },
          UI.createElement(
            "button",
            { id: "create-post-btn", class: "panel-create-post" },
            "Create New Post"
          )
        ),
        createSection(),
        UI.createElement("section", { class: "box" }, "section"),
        createFooter(),
      ]),
    ]),
  ]);

  UI.render(container, document.querySelector("body"));

  document.getElementById("create-post-btn").addEventListener("click", () => {
    createNewPost();
  });
};

function createFooter() {
  return UI.createElement("section", { class: "footer" }, Date().toString());
}

setInterval(() => {
  if (document.querySelector("div.section")) {
    document
      .querySelector("div.section")
      .removeChild(document.querySelector("section.footer"));
  }
  UI.render(createFooter(), document.querySelector("div.section"));
}, 1000);

function createSection() {
  const elements = state.posts.map((post) => {
    return UI.createElement(
      "div",
      {
        class: "card",
      },
      [
        UI.createElement("div", { src: `${post.img}`, class: "card-body" }, [
          UI.createElement("p", { class: "card-text" }, post.title),
          UI.createElement("p", { class: "card-text" }, post.story),
        ]),
      ]
    );
  });

  const section = UI.createElement("section", { class: "box" }, elements);

  return section;
}

const initApplicants = () => {
  try {
    const savedItems = Storage.getItem("posts");

    if (savedItems) {
      state.posts = savedItems;
    } else {
      state.posts = posts;

      Storage.set("posts", posts);
    }
  } catch (error) {
    state.posts = posts;
  } finally {
    createHomeLayout();
  }
};

initApplicants();
