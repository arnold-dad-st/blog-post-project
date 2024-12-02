import UI from "./utils/utils.js";
import { Storage } from "./utils/storage.js";

function createForm() {
  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement("header", { class: "header" }, [
      UI.createElement("a", { href: "home.html" }, "Home"),
    ]),
    UI.createElement("form", { class: "form-wrapper" }, [
      UI.createElement("div", { class: "create-form-container" }, [
        UI.createElement("input", {
          type: "text",
          id: "postTitle",
          name: "postTitle",
          placeholder: "Enter post title",
        }),
        UI.createElement("textarea", {
          id: "postStory",
          name: "postStory",
          placeholder: "Enter your story here",
          rows: "5",
          cols: "50",
        }),
        UI.createElement("input", {
          type: "url",
          id: "postImage",
          name: "postImage",
          placeholder: "Enter image URL",
        }),
        UI.createElement("div", { class: "" }, [
          UI.createElement("button", { id: "create-new-post" }, "Create Post"),
        ]),
      ]),
    ]),
  ]);

  // Render the layout to the document body
  UI.render(container, document.body);

  const createPostForm = document.getElementById("create-new-post");
  createPostForm.addEventListener("click", createPostHandler);
}

createForm();

function createPostHandler(event) {
  event.preventDefault();

  // Get form values
  const title = document.getElementById("postTitle").value.trim();
  const story = document.getElementById("postStory").value.trim();
  const imageUrl = document.getElementById("postImage").value.trim();

  // Validate the form inputs
  if (!title || !story || !imageUrl) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new post object
  const newPost = {
    title,
    story,
    imageUrl,
    createdAt: new Date().toISOString(),
  };

  // Check if posts already exist in Storage
  let posts = Storage.getItem("posts");

  // If no posts exist, create an empty array
  if (!posts) {
    posts = [];
  }

  // Add the new post to the posts array
  posts.push(newPost);

  // Save the updated posts array to Storage
  Storage.set("posts", posts);

  window.location.assign("home.html");
}
