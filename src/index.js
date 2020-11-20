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
  let liEl = document.createElement('div');
  ulEl.setAttribute('id', id);
  ulEl.appendChild(liEl);
  return ulEl;
}

return {
  createDiv,
  createHeading,
  createInput,
  createImage,
  createList
}
}

function loadElement(){
  let headingEl = DomFactory().createHeading('h1','Create New Task');
  let newTaskContainerEl = DomFactory().createDiv('','create-new');
  let taskListContainerEl = DomFactory().createDiv('list-container','task-list-container');
  let inputColumnEl = DomFactory().createInput('text','','new-task-col');
  let imageEl = DomFactory().createImage('add-task','./assets/material-icon-add.svg','add');
  
  wrapperDiv.appendChild(headingEl);
  wrapperDiv.appendChild(newTaskContainerEl);
  newTaskContainerEl.appendChild(inputColumnEl);
  newTaskContainerEl.appendChild(imageEl);
  wrapperDiv.appendChild(newTaskContainerEl);
  wrapperDiv.appendChild(taskListContainerEl);
};
loadElement();

let taskArray = [];

function addTask(){
  let addBtn = document.querySelector('#add-task');
  let input = document.querySelector('#new-task-col');
  addBtn.addEventListener('click', () => {
    let taskList = document.getElementById('list-container');
    let listEl = DomFactory().createList('task-list');
    console.log(input.value + ' ' + 'added.');
    listEl.textContent = input.value;
    taskArray.push(
      {
        task: input.value,
        dateCreate: format(new Date(), "iiii"),
      }
      );
    taskList.appendChild(listEl);
    input.value = '';
    console.table(taskArray);
  });
}
addTask();


// console.log(taskList);