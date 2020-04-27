function createTask(count) {

    //creating DOM elements
    let divTask = document.createElement('div');
    let divClose = document.createElement('div');
    let divTaskName = document.createElement('div');
    let divDescription = document.createElement('div');
    let divTaskFooter = document.createElement('div');
    let divDate = document.createElement('div');
    let buttonStatus = document.createElement('button');
    let material = document.createElement('i');

    buttonStatus.innerHTML = 'start';
    material.innerHTML = 'close';

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
        second: 'numeric'
    });

    //adding classes
    divTask.classList.add('task');
    divTask.setAttribute('data-count', count);
    divClose.classList.add('close');
    material.classList.add('material-icons');
    divTaskName.classList.add('task-name');
    divDescription.classList.add('description');
    divTaskFooter.classList.add('task-footer');
    divDate.classList.add('date');
    buttonStatus.classList.add('status');
    buttonStatus.classList.add('waves-effect');
    buttonStatus.classList.add('w');
    buttonStatus.classList.add('waves-light');
    buttonStatus.classList.add('btn-small');

    //add task to task manager
    let task = document.querySelector('.tasks').appendChild(divTask);
    let close = task.appendChild(divClose);
    close.appendChild(material);
    task.appendChild(divTaskName);
    task.appendChild(divDescription);
    let taskFooter = task.appendChild(divTaskFooter);
    taskFooter.appendChild(divDate);
    taskFooter.appendChild(buttonStatus);

    divClose.onclick = function () {
        divTask.remove();
    }
}

let taskCount = '0';
document.querySelector('.create-task-btn').onclick = function () {
    createTask(taskCount);
    taskCount++;
}
document.querySelector('select').onchange = function () {
    let tasks = document.querySelectorAll('.task');
    for (let i = tasks.length - 2; i >= 0; i--) {
        // console.log(tasks[i].getAttribute('data-count'));
        let a = tasks[i];
        tasks[i].remove();
        document.querySelector('.tasks').append(a);

    }
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, []);
});