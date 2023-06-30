'use strict';

// Chọn elements
const inputTask = document.getElementById('input-task');
const todoList = document.getElementById('todo-list');

const addBtn = document.getElementById('btn-add');

// Data khởi đầu
const CURRENT_USER_KEY = 'currentUser';
const TODO_KEY = 'todoArr';
const currentUser = JSON.parse(getFromStorage(CURRENT_USER_KEY));
const todoArr = JSON.parse(getFromStorage(TODO_KEY));

class Task {
  constructor(task, owner, isDone = false) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}

// Hiển thị các task
const renderTask = function (arr) {
  todoList.innerHTML = '';

  arr.map((data, index) => {
    if (data.owner === currentUser[0].username) {
      const html = `
        <li id=${index} class="${data.isDone === true ? 'checked' : ''}">
            ${data.task}
            <span id=${index} class="close">×</span>
        </li>
    `;

      todoList.insertAdjacentHTML('afterbegin', html);
    }
  });
};

renderTask(todoArr);

// Event Listener
// Thêm mới Todo và Lưu dữ liệu vào LocalStorage
addBtn.addEventListener('click', function () {
  // Lấy data nhập vào từ input
  const task = inputTask.value;

  // Tạo task mới
  const todo = new Task(task, currentUser[0].username);

  // Thêm task mới vào mảng
  todoArr.push(todo);

  // Lưu mảng vào localStorage
  saveToStorage(TODO_KEY, JSON.stringify(todoArr));

  // Xóa input
  inputTask.value = '';
  inputTask.blur();

  renderTask(todoArr);
});

// Toggle Task
todoList.addEventListener('click', function (e) {
  todoArr.map((todo, index) => {
    if (index === Number(e.target.id)) {
      if (!e.target.classList.contains('close')) {
        e.target.classList.toggle('checked');

        if (e.target.classList.contains('checked')) {
          todo.isDone = true;
        } else {
          todo.isDone = false;
        }
      } else {
        todoArr.splice(index, 1);
      }
    }
  });

  // Lưu mảng vào localStorage
  saveToStorage(TODO_KEY, JSON.stringify(todoArr));

  renderTask(todoArr);
});
