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

function createItem(className){
  let liEl = document.createElement('div');
  liEl.classList.add(className);
  // liEl.setAttribute('onclick', 'myFunction()');
  return liEl;
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
    
    taskArray.push( { id: id, task: input.value, timeStamp: format(new Date(), "iiii") } );
    createTaskCard();
    
    input.value = '';
    input.focus();
    console.table(taskArray);
}

function createTaskCard(){
  refreshList();
  for (let index = 0; index < taskArray.length; index++) {
    let itemId = taskArray[index].id;
    let itemTask = taskArray[index].task;
    let listEl = DomFactory().createItem('task-item');
    listEl.setAttribute('id', 'task-' + itemId);
    listEl.textContent = itemTask;
    taskList.appendChild(listEl);
    console.log(taskArray[index].id);
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
      taskItem[index].addEventListener('click', () => {
        // element.classList.toggle('task-done');
        console.log(taskItem[index].length);
      })
  }
  // itemList.forEach(element => {
  //   element.addEventListener('click', () => {
  //     // element.classList.toggle('task-done');
  //     console.log(element);
  //   })
  // });
}