const baseUrl = "https://dummyjson.com";
const endpoint = "/todos/";

const getTodoById = (id, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${baseUrl}${endpoint}${id}`, true);
  xhr.send();

  xhr.addEventListener("load", function () {
    const todo = JSON.parse(this.responseText);
    callback(todo);
  });

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const todo = JSON.parse(xhr.responseText);
      callback(todo);
    }

    if (xhr.readyState === 2 && xhr.status === 404) {
      callback({
        id: "Not Found",
      });
    }
  };
};

document.getElementById("get-todo").addEventListener("click", (e) => {
  e.preventDefault();

  const todoId = document.getElementById("todo-id").value;
  getTodoById(todoId, (data) => {
    document.getElementById("todo-id-display").textContent = data.id;
    document.getElementById("todo-title").textContent = data.todo;
    document.getElementById("todo-completed").textContent = data.completed
      ? "Yes"
      : "No";
    document.getElementById("todo-result").style.display = "block";
  });
});
