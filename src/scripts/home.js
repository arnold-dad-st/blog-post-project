import UI from "./utils/utils.js";
import { Storage } from "./utils/storage.js";

const posts = [
  {
    id: 1,
    title: "The Adventures of Alice in Wonderland",
    story:
      "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations.",
    authorName: "Lewis Carroll",
    img: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/84f9dc39-0868-4cec-aeaa-2356387f37ce/Alice%E2%80%99s%20Adventures%20in%20Wonderland%20-%20Header.png",
  },
  {
    id: 2,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    story:
      "One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them, in the Land of Mordor where the Shadows lie.",
    authorName: "J.R.R. Tolkien",
    img: "https://img.hulu.com/user/v3/artwork/3c4e0a9f-c6f2-44f4-a703-a18c6be2a937?base_image_bucket_name=image_manager&base_image=243fcf14-8e45-4441-96a8-be510660958a&size=600x338&format=webp",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    story:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
    authorName: "Jane Austen",
    img: "https://wellsvillesun.com/wp-content/uploads/2024/01/pride-and-prejudice-book-summary.jpg.webp",
  },
];

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

const bloggers = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    id: 3,
    firstName: "Monica",
    lastName: "Brown",
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
  },
];

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
