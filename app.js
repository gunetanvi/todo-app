// Sample Todo Application Code
function addTodoItem(task) {
    if (!task) {
        console.log("Task cannot be empty");
        return;
    }
    let todoList = [];
    todoList.push(task);
    console.log("Added task: " + task);
    return todoList;
}

addTodoItem("Learn DevOps with Jenkins and SonarQube");

// Testing automatic webhook trigger
