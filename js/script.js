function createTask() {

    //creating DOM elements
    let divTask = document.createElement('div');
    let divClose = document.createElement('div');
    let divTaskName = document.createElement('div');
    let divDescription = document.createElement('div');
    let divTaskFooter = document.createElement('div');
    let divDate = document.createElement('div');
    let buttonStatus = document.createElement('button');

    buttonStatus.innerHTML = 'start';
    divClose.innerHTML = 'x';

    //fill task from user input
    let taskName = document.querySelector('.input-name');
    let taskDescription = document.querySelector('.input-description');
    divTaskName.innerHTML = taskName.value;
    divDescription.innerHTML = taskDescription.value; //добавить очистку полей после добавления задачи
    divDate.innerHTML = new Date().toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long'
    });

    //adding classes
    divTask.classList.add('task');
    divClose.classList.add('close');
    divTaskName.classList.add('task-name');
    divDescription.classList.add('description');
    divTaskFooter.classList.add('task-footer');
    divDate.classList.add('date');
    buttonStatus.classList.add('status');

    //add task to task manager
    let task = document.querySelector('.tasks').appendChild(divTask);
    task.appendChild(divClose);
    task.appendChild(divTaskName);
    task.appendChild(divDescription);
    let taskFooter = task.appendChild(divTaskFooter);
    taskFooter.appendChild(divDate);
    taskFooter.appendChild(buttonStatus);

    divClose.onclick = function () {
        divTask.remove();
    }
}
document.querySelector('.create-task-btn').onclick = createTask;