const TASK_STATE = {
    START: 'start',
    IN_PROGRESS: 'in progress',
    DONE: 'done',
    CLOSED: 'closed'
}
let taskId = 0;

function getTaskId() {
    taskId = taskId + 1;
    return taskId
}

function getData() {
    let taskName = document.querySelector('.input-name').value;
    let taskDescription = document.querySelector('.input-description').value;

    return {
        id: getTaskId(),
        name: taskName,
        description: taskDescription,
        createdAt: new Date().toLocaleString("ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }),
        state: TASK_STATE.START
    }
}

function createTask(task, onClose, changeStatus) {


    //creating DOM elements
    let divTask = document.createElement('div');
    let divClose = document.createElement('div');
    let divTaskName = document.createElement('div');
    let divDescription = document.createElement('div');
    let divTaskFooter = document.createElement('div');
    let divDate = document.createElement('div');
    let buttonStatus = document.createElement('button');
    let material = document.createElement('i');

    if (task.state === TASK_STATE.CLOSED) {
        buttonStatus.classList.add('disabled');
    }
    buttonStatus.innerHTML = task.state;
    material.innerHTML = 'close';

    //fill task from user input

    divTaskName.innerHTML = task.name;
    divDescription.innerHTML = task.description; //добавить очистку полей после добавления задачи
    divDate.innerHTML = task.createdAt;

    //adding classes
    divTask.classList.add('task');
    // divTask.setAttribute('data-count', count);
    divClose.classList.add('close');
    material.classList.add('material-icons');
    divTaskName.classList.add('task-name');
    divDescription.classList.add('description');
    divTaskFooter.classList.add('task-footer');
    divTaskFooter.classList.add('row');
    divDate.classList.add('date', 'col', 's7');
    buttonStatus.classList.add('status', 'waves-effect', 'w', 'waves-light', 'btn-small', 'col', 's5'  );

    //methods
    divClose.onclick = () => {
        divTask.remove();
        onClose();

    };

    buttonStatus.onclick = () => {
        changeStatus();
    }

    //add task to task manager
    divTask.append(divClose);
    divClose.append(material);
    divTask.append(divTaskName);
    divTask.append(divDescription);
    divTaskFooter.append(divDate);
    divTaskFooter.append(buttonStatus);
    divTask.append(divTaskFooter);
    document.querySelector('.tasks').prepend(divTask);


}

let tasks = [];

const beforeCreateTask = (task) => {
    createTask(task, () => {
            tasks = tasks.filter(({id}) => id !== task.id);
        },
        () => {
            task.state = getState(task.state);
            renderTasks(tasks);
        }
    )
}

function renderTasks(tasks) {
    document.querySelector('.tasks').innerHTML = '';
    const currentSort = document.querySelector('select').value;
    tasks.sort(getCompareFunction(currentSort));
    tasks.map(beforeCreateTask);
}


document.querySelector('.create-task-btn').onclick = function () {
    const task = getData();
    tasks.push(task);
    renderTasks(tasks);
}

const sortOldFunction = (a, b) => {
    if (a.id > b.id) {
        return -1;
    }
    if (a.id < b.id) {
        return 1;
    }
    return 0;
}

const sortNewFunction = (a, b) => {

    if (a.id < b.id) {
        return -1;
    }
    if (a.id > b.id) {
        return 1;
    }
    // a должно быть равным b
    return 0;
}
const getState = (status) => {
    switch (status) {
        case TASK_STATE.START:
            return TASK_STATE.IN_PROGRESS;
        case TASK_STATE.IN_PROGRESS:
            return TASK_STATE.DONE;
        case TASK_STATE.DONE:
            return TASK_STATE.CLOSED;
    }
}
const getCompareFunction = (value) => {
    switch (value) {
        case 'sort-new':
            return sortNewFunction;
        case 'sort-old':
            return sortOldFunction;
    }
}
document.querySelector('select').onchange = function (e) {
    renderTasks(tasks);
}


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, []);
});