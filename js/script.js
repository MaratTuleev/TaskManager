function createTask(name, description, date) {
    let divTask = document.createElement('div');
    let divClose = document.createElement('div');
    let divTaskName = document.createElement('div');
    let divDescription = document.createElement('div');
    let divTaskFooter = document.createElement('div');
    let divDate = document.createElement('div');
    let buttonStatus = document.createElement('button');

    divTaskName.innerHTML = name;
    divDescription.innerHTML = description;
    divDate.innerHTML = date;
    buttonStatus.innerHTML = 'start';
    divClose.innerHTML = 'x';

    divTask.classList.add('task');
    divClose.classList.add('close');
    divTaskName.classList.add('task-name');
    divDescription.classList.add('description');
    divTaskFooter.classList.add('task-footer');
    divDate.classList.add('date');
    buttonStatus.classList.add('status');


    let task = document.querySelector('.tasks').appendChild(divTask);
    task.appendChild(divClose);
    task.appendChild(divTaskName);
    task.appendChild(divDescription);
    let taskFooter = task.appendChild(divTaskFooter);
    taskFooter.appendChild(divDate);
    taskFooter.appendChild(buttonStatus);
}

createTask();