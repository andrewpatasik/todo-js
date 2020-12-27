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
  // liEl.setAttribute('onclick', 'myFunction()');
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

function add(id){
  let input = document.querySelector('#new-task-col');
    if (input.value === '') {
      alert("must add task");
      return;
    }
    let task = new Task(id, input.value, false);
    taskArray.push( task );
    createTaskCard();
    
    input.value = '';
    input.focus();
    console.table(taskArray);
}

class Task{
  constructor(id, task, toggle){
    this.id = id;
    this.task = task;
    this.toggle = toggle;
    this.timeStamp = this.setTimeStamp();
  }
  setTimeStamp(){
    let f = 'iiii, HH:mm:ss';
    // return format(new Date(), "iiii");
    return format(new Date(), f);
  }
}

function createTaskCard(){
  refreshList();
  for (let index = 0; index < taskArray.length; index++) {
    let itemId = taskArray[index].id;
    let itemTask = taskArray[index].task;
    let timeCreated = taskArray[index].timeStamp;
    let isTrue = taskArray[index].toggle;
    let listEl = DomFactory().createItem('task-item', itemTask, timeCreated);
    listEl.setAttribute('id', 'task-' + itemId);
    isTrue === true ? listEl.classList.add('task-done') : 
                      listEl.classList.remove('task-done');
    taskList.appendChild(listEl);
  }
}

function refreshList(){
  let parentNode = taskList;
  let childNode = parentNode.lastElementChild;
  while (childNode) {
    parentNode.removeChild(childNode);
    childNode = parentNode.lastElementChild;
  }
}

function addTask(){
  let idCounter = 1;
  addBtn.addEventListener('click', () => {
    add(idCounter);
    idCounter++;
    getItemById();
  })  
}
addTask();

function getItemById(){
  let taskItem = document.querySelectorAll('.task-item');
  // let itemList = Array.from(taskItem);
  for (let index = 0; index < taskItem.length; index++) {
    let isTrue = taskArray[index].toggle;
    taskItem[index].addEventListener('click', () => {
      if (isTrue !== true) {
        taskItem[index].classList.add('task-done')
        taskArray[index].toggle = true;
        isTrue = taskArray[index].toggle;
      } else if (isTrue === true) {
        taskItem[index].classList.remove('task-done');
        taskArray[index].toggle = false;
        isTrue = taskArray[index].toggle;
      }
        // console.log(taskArray[index]);
      })
  }
}