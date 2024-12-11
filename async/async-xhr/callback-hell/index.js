const baseUrl = "https://dummyjson.com";
const postsEndpoint = "/posts/";
const userEndpoint = "/users/";
const commentsEndpoint = "/comments/";

const getPostById = (id, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${baseUrl}${postsEndpoint}${id}`, true);
  xhr.send();

  xhr.addEventListener("load", function () {
    const todo = JSON.parse(this.responseText);
    callback(todo);
  });
};

const getUserById = (id, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${baseUrl}${userEndpoint}${id}`, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const todo = JSON.parse(xhr.responseText);
      callback(todo);
    }
  };
};

const getCommentById = (id, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${baseUrl}${commentsEndpoint}${id}`, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const todo = JSON.parse(xhr.responseText);
      callback(todo);
    }
  };
};

document.getElementById("get-data").addEventListener("click", (e) => {
  getCommentById(1, (comment) => {
    console.log('comment:', comment);
    getPostById(comment.postId, (post) => {
      console.log('post:', post);
      getUserById(post.userId, (user) => {
        console.log('user:', user);
      });
    });
  });
});
