var icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}

var localData = localStorage.getItem("theme");

if (localData == "light") {
    icon.src = "images/moon.png";
    document.body.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)), url("+"images/pattern2.jpg"+")";
    document.body.classList.remove("dark-theme");
}
else if (localData == "dark") {
    icon.src = "images/sun.png";
    document.body.style.background = "#1c1c1c";
    document.body.classList.add("dark-theme");
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
        document.body.style.background = "#1c1c1c";
        localStorage.setItem("theme", "dark");
    }
    else {
        icon.src = "images/moon.png";
        document.body.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)), url("+"images/pattern2.jpg"+")";
        localStorage.setItem("theme", "light");
    }
}

const todo = {
    action(e) {
      const target = e.target;
      if (target.classList.contains('todo__action')) {
        const action = target.dataset.todoAction;
        const elemItem = target.closest('.todo__item');
        if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
          elemItem.remove();
        } else {
          elemItem.dataset.todoState = action;
        }
        this.save();
      } else if (target.classList.contains('todo__add')) {
        this.add();
        this.save();
      }
    },
    add() {
      const elemText = document.querySelector('.todo__text');
      if (elemText.disabled || !elemText.value.length) {
        return;
      }
      document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
      elemText.value = '';
    },
    create(text) {
      return `<li class="todo__item" data-todo-state="active">
        <span class="todo__task">${text}</span>
        <span class="todo__action todo__action_restore" data-todo-action="active"></span>
        <span class="todo__action todo__action_complete" data-todo-action="completed"></span>
        <span class="todo__action todo__action_delete" data-todo-action="deleted"></span></li>`;
    },
    init() {
      const fromStorage = localStorage.getItem('todo');
      if (fromStorage) {
        document.querySelector('.todo__items').innerHTML = fromStorage;
      }
      document.querySelector('.todo__options').addEventListener('change', this.update);
      document.addEventListener('click', this.action.bind(this));
    },
    update() {
      const option = document.querySelector('.todo__options').value;
      document.querySelector('.todo__items').dataset.todoOption = option;
      document.querySelector('.todo__text').disabled = option !== 'active';
    },
    save() {
      localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
    }
  }
  
  todo.init();