import './styles/main.css';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

let wrapperDiv = document.getElementById('wrapper');

function DomFactory(){
  function createDiv(id, className){
    let el = document.createElement('div');
    el.setAttribute('id', id);
    el.classList.add(className);
    return el;
  }

function createHeading(type, value){
  if (type === 'h1') {
    let el = document.createElement('h1');
    el.textContent = value;
    return el;
  } else if (type === 'h2') {
    let el = document.createElement('h2');
    el.textContent = value;
    return el;
  } else if (type === 'h3') {
    let el = document.createElement('h3');
    el.textContent = value;
    return el;
  }
}

function createInput(type, name, id){
  let el = document.createElement('input');
  el.setAttribute('type', type);
  el.setAttribute('name', name);
  el.setAttribute('id', id);
  return el;
}

function createImage(id, src, alt){
  let el = document.createElement('img');
  el.setAttribute('id', id);
  el.setAttribute('src', src);
  el.setAttribute('alt', alt);
  return el;
}

function createList(id){
  let ulEl = document.createElement('ul');
  ulEl.setAttribute('id', id);
  return ulEl;
}

function createItem(className, itemContent, timeCreated){
  //initialize item element
  let itemCard = document.createElement('div');
  let par = document.createElement('p');
  let taskDue = document.createElement('div');
  let delEl = document.createElement('div');
  let editEl = document.createElement('div');
  itemCard.classList.add(className);
  par.textContent = itemContent;
  taskDue.classList.add('task-due');
  taskDue.textContent = timeCreated;
  delEl.classList.add('del-task');
  editEl.classList.add('edit-task');
  itemCard.appendChild(par);
  itemCard.appendChild(taskDue);
  itemCard.appendChild(delEl);
  itemCard.appendChild(editEl);
  return itemCard;
}

return {
  createDiv,
  createHeading,
  createInput,
  createImage,
  createList,
  createItem
}
}

function loadElement(){
  let headingEl = DomFactory().createHeading('h1','Create New Task');
  let newTaskContainerEl = DomFactory().createDiv('','create-new');
  let taskListContainerEl = DomFactory().createDiv('list-container','task-list-container');
  let inputColumnEl = DomFactory().createInput('text','','new-task-col');
  let imageEl = DomFactory().createImage('add-task','./assets/material-icon-add.svg','add');
  let taskList = DomFactory().createList('task-list');

  wrapperDiv.appendChild(headingEl);
  wrapperDiv.appendChild(newTaskContainerEl);
  newTaskContainerEl.appendChild(inputColumnEl);
  newTaskContainerEl.appendChild(imageEl);
  wrapperDiv.appendChild(newTaskContainerEl);

  taskListContainerEl.appendChild(taskList);
  wrapperDiv.appendChild(taskListContainerEl);
};
loadElement();

let taskArray = [];
let addBtn = document.querySelector('#add-task');
let taskList = document.getElementById('task-list');
let input = document.querySelector('#new-task-col');
let id = 1;

function add(){
    if (input.value === '') {
      alert("should add task");
      return;
    }
    let task = new Task(id, input.value, false);
    taskArray.push( task );
    renderList();
    
    input.value = '';
    input.focus();
    console.table(taskArray);
    id++;
}

class Task{
  constructor(id, task){
    this.id = id;
    this.task = task;
    this.timeStamp = this.setTimeStamp();
  }
  setTimeStamp(){
    let timeFormat = 'iiii, HH:mm';
    return format(new Date(), timeFormat);
  }
}

function renderList(){
  clearList();
  for (let index = 0; index < taskArray.length; index++) {
    let itemId = taskArray[index].id;
    let itemTask = taskArray[index].task;
    let timeCreated = taskArray[index].timeStamp;
    
    let listEl = DomFactory().createItem('task-item', itemTask, timeCreated);
    listEl.setAttribute('id', 'task-' + itemId);
    
    taskList.appendChild(listEl);
  }
}

function clearList(){
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

input.addEventListener('keyup', (event) => {
  if(event.keyCode === 13) {
    event.preventDefault();
    add();
  }
})

addBtn.addEventListener('click', () => {
    add();
})  

taskList.addEventListener('click', (e) => {
  let items = document.querySelectorAll('.del-task');
  for (let index = 0; index < items.length; index++) {
    items[index].addEventListener('click', () => {
      taskArray.splice(index, 1);
      renderList();
      console.table(taskArray);
    })
  }
}, true)  //event capture

// taskList.addEventListener('click', (e) => {
//   let t = e.target;
//   let items = document.querySelectorAll('.task-item');
//   t.addEventListener('click', () => {
//     console.log(items);
//   })
// },true)