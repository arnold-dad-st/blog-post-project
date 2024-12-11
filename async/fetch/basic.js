const baseUrl = "https://dummyjson.com";
const postsEndpoint = "/posts/";
const userEndpoint = "/users/";
const commentsEndpoint = "/comments/";

const button = document.getElementById("get-products");

function getProducts() {
  return fetch("https://dummyjson.com/productss")
    .then((response) => {
      console.log("Response", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    }, (error) => {
      console.log("Error", error);
    })
    .catch((err) => console.error(err))
    .finally(() => {
      console.log("Fetch complete");
    });
}

button.addEventListener("click", () => {
  getProducts();
});
