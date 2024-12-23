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

function initApplicants() {
  createForm();

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);

  if (searchParams.has("id")) {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const postId = searchParams.get("id");

    const post = posts.find((post) => post.id === +postId);

    document.getElementById("postTitle").value = post.title;
    document.getElementById("postStory").value = post.story;
    document.getElementById("postImage").value = post.imageUrl ? post.imageUrl : "";
  }

}

initApplicants();


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

  // Check if posts already exist in localStorage
  let posts = JSON.parse(localStorage.getItem("posts"));

  // If no posts exist, create an empty array
  if (!posts) {
    posts = [];
  }

  // Add the new post to the posts array
  posts.push(newPost);

  // Save the updated posts array to localStorage
  localStorage.setItem("posts", JSON.stringify(posts));

  window.location.assign("home.html");
}
