const baseUrl = "https://dummyjson.com";
const postsEndpoint = "/posts/";
const userEndpoint = "/users/";
const commentsEndpoint = "/comments/";

const getPostById = (id) => {
  return fetch(`${baseUrl}${postsEndpoint}${id}`).then((response) =>
    response.json()
  );
};

const getUserById = (id) => {
  return fetch(`${baseUrl}${userEndpoint}${id}`).then((response) =>
    response.json()
  );
};

const getCommentById = (id, callback) => {
  return fetch(`${baseUrl}${commentsEndpoint}${id}`).then((response) =>
    response.json()
  );
};

document.getElementById("get-products").addEventListener("click", (e) => {
  getCommentById(1).then((comment) => {
    console.log("comment:", comment);
    getPostById(comment.postId).then((post) => {
      console.log("post:", post);
      getUserById(post.userId).then((user) => {
        console.log("user:", user);
      });
    });
  });
});
