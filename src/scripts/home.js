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

const bloggers = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    username: "Alice Johnson",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    username: "Bob Smith",
  },
  {
    id: 3,
    firstName: "Monica",
    lastName: "Brown",
    username: "Monica Brown",
  },
];

const state = {
  posts: [],
};

function getRandomAvatar(gender) {
  const avatars = [
    "https://www.w3schools.com/howto/img_avatar.png",
    "https://www.w3schools.com/w3images/avatar2.png",
    "https://www.w3schools.com/w3images/avatar5.png",
    "https://www.w3schools.com/w3images/avatar6.png",
    "https://www.w3schools.com/howto/img_avatar2.png",
  ];

  const randomIndex = Math.floor(Math.random() * avatars.length);

  return avatars[randomIndex];
}

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
      createSidebar(bloggers),
      UI.createElement("div", { class: "section" }, [
        UI.createElement(
          "section",
          { class: "panel" },
          UI.createElement(
            "button",
            { class: "panel-create-post", onclick: "createNewPost()" },
            "Create New Post"
          )
        ),
        createSection(),
        createFooter(),
      ]),
    ]),
  ]);

  UI.render(container, document.querySelector("body"));
};

function createFooter() {
  return UI.createElement("section", { class: "footer" }, Date().toString());
}


const handleDelete = (id) => {
  state.posts = state.posts.filter((post) => post.id !== id);
  localStorage.setItem("posts", JSON.stringify(state.posts));

  document.querySelector(".container-root").remove();

  createHomeLayout();
};

const handleEdit = (id) => {
  const queryParams = new URLSearchParams({
    id: id,
  });

  window.location.href = `new-post.html?${queryParams.toString()}`;
};

function createSection() {
  const elements = state.posts.map((post) => {
    return UI.createElement(
      "div",
      {
        class: "card",
      },
      [
        UI.createElement("div", { class: "card-body" }, [
          UI.createElement("p", { class: "card-text" }, post.title),
          UI.createElement("p", { class: "card-text" }, post.story),
          UI.createElement(
            "button",
            { class: "card-button m-r-1", onClick: `handleDelete(${post.id})` },
            "Delete"
          ),
          UI.createElement(
            "button",
            { class: "card-button", onClick: `handleEdit(${post.id})` },
            "Edit"
          ),
        ]),
      ]
    );
  });

  const section = UI.createElement("section", { class: "box" }, elements);

  return section;
}

function createSidebar() {
  const elements = bloggers.map((blogger) => {
    return UI.createElement(
      "div",
      { class: "card m-b-1" },
      [
        UI.createElement("img", { src: getRandomAvatar(), alt: "Avatar" }),
        UI.createElement(
          "p",
          { class: "sidebar-text" },
          `${blogger.firstName} ${blogger.lastName}`
        ),
      ]
    );
  });

  return UI.createElement("sidebar", { class: "sidebar" }, elements);

}

const initApplicants = () => {
  try {
    const savedItemsJSON = localStorage.getItem("posts");

    const savedItems = JSON.parse(savedItemsJSON);

    if (savedItems) {
      state.posts = savedItems;
    } else {
      state.posts = posts;
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  } catch (error) {
    state.posts = posts;
  } finally {
    createHomeLayout();
  }
};

initApplicants();

setInterval(() => {
  if (document.querySelector("div.section")) {
    document
      .querySelector("div.section")
      .removeChild(document.querySelector("section.footer"));
  }
  UI.render(createFooter(), document.querySelector("div.section"));
}, 1000);
