import { layout } from './layout';
import { projectContainerComponent } from './projectContainerComponent';
import { projectBoxComponent, projectBoxAddComponent } from './projectBoxComponent';

let projectContainer = projectContainerComponent('home-project').div;
let projectBox = projectBoxComponent('My Project');
let projectAddBox = projectBoxAddComponent();

let projectArray = [];

const homeDiv = () => {
    let div = document.createElement('div');
    div.setAttribute('id', 'home');
    return { div };
}

const homeTitle = () => {
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'home-title');
    h1.innerHTML = 'Create New Project';
    return h1;
}

const homeComponent = () => {
    //render from array
    let mainDiv = homeDiv().div;
    let homeLayout = layout('home-layout').div;
    let h2 = homeTitle();

    for (let index = 0; index < projectArray.length; index++) {
        projectContainer.appendChild(projectArray[index].box);
    }
    projectContainer.appendChild(projectAddBox);       //insert to last
    homeLayout.appendChild(h2);
    homeLayout.appendChild(projectContainer);
    mainDiv.appendChild(homeLayout);
    
    return mainDiv;
}

let addNewProject = () => {
    let projectAddBtn = document.querySelector('#add-new');
    projectAddBtn.addEventListener('click', (e) => {
        let box = projectBox();
        projectArray.push({box});
        for (let index = 0; index < projectArray.length; index++) {
            projectContainer.appendChild(projectArray[index].box);            
            projectContainer.appendChild(projectAddBox);       //insert to last
        }
        console.log(projectArray);
    })

    return projectAddBtn;
}

export { 
    homeComponent as home,
    addNewProject as addProject,
};