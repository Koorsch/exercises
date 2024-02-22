/* 
This program is a simple to-do list! 

Overall, this program allows users to add new tasks, mark tasks as completed, delete tasks, and clear all 
tasks from the list. It uses local storage to persist the to-do list data between page loads.

Events:
1. User Submits New Task
2. User Deletes Task
3. User Marks Task as Completed
4. User Clears All Tasks

Transitions:
- User Submits New Task: Update to-do list with new task, remain in "Populate Todo List" state
- User Deletes Task: Update to-do list by removing task, remain in "Populate Todo List" state
- User Marks Task as Completed: Update to-do list with task completion status, remain in "Populate Todo List" state
- User Clears All Tasks: Clear all tasks from the to-do list, remain in "Populate Todo List" state

*/


import {$, $$ } from "../utils/dom.js";

const taskSubmit = $("#taskSubmit");


//The function where we do our heavy lifting with populating our templates
function loadTodo() {
  let bigItemList = document.querySelector('.todoList');
  //Start up with a clean slate (for now)
  bigItemList.innerHTML = ''; 
  let todoList = JSON.parse(localStorage.getItem('todo')) || [];
  
  //Sorting like we did in our Filter exercise
  todoList.sort(function(a, b) {
        return a.finished - b.finished;
      });
      
      //forEach-loop the items in todoList, 
      todoList.forEach(function(item, index) {
        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);
        copy.querySelector(".list-task").innerHTML = item.task;
        copy.querySelector("#list-count").innerHTML = `#${item.count}`;
        const check = copy.querySelector("#check");
        const deleteButton = copy.querySelector("#delete");
        deleteButton.innerText = "Remove";
        const info = copy.querySelector(".info");
        check.checked = item.finished;
        check.name = item.id
        check.id = item.id
        //adds a class of 'finished' 
        //(nothing cool, could've just put a .style as well) 
        //if checkmark is checked
        if (item.finished) {
            info.classList.add("finished");
        }
    bigItemList.appendChild(copy);
    
    //EventListener for removing todo-tasks
    deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        localStorage.setItem('todo', JSON.stringify(todoList));
        loadTodo();
      })
      
      //Does checkmark check/uncheck? On change, change and re-render list.
      check.addEventListener('change', (e) => {
        item.finished = !item.finished;
        localStorage.setItem('todo', JSON.stringify(todoList));
        //Render items to update UI
        loadTodo();
      });
    });
  }
  //Our form-submit, does some heavy lifting.
  taskSubmit.addEventListener('submit', function(event) {
      event.preventDefault(); // Remove normal behaviour of form (usually it reloads the page, we don't want that)
    
      // Catch the inputs
      let taskValue = $('#inputValue').value;
      let taskCount = $('#count').value;
      let id = self.crypto.randomUUID();

      let newItem = {
          task: taskValue,
          count: taskCount,
          finished: false,
          id: id
      };
      
      //Check if the input value in the object has any valid value
      if (newItem.task.trim() === "") {
        console.log('Nothing valid was entered, try again!');
        // Returns null and stops this submit action if nothing was entered.
        return; 
      }
    
      //Retrieve existing items from local storage or initialize an empty array
      let todoList = JSON.parse(localStorage.getItem('todo')) || [];
      // Push our submitted object, with the newItem values filled out, to our array.
      todoList.push(newItem);
      //Store the updated array back in local storage
      localStorage.setItem('todo', JSON.stringify(todoList));
      // Reload and re-render the updated list
      loadTodo();
      // Clear the input fields, get them ready for new values!
      document.querySelector('#inputValue').value = '';
      document.querySelector('#count').value = 0;
    });
      //CAUTION, not fully implemented - flushes localStorage
    $('#removeALL').addEventListener('click', () => {
      localStorage.clear();
      loadTodo();
    })

  loadTodo();
  