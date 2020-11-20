import '../assets/material-icon-add.svg';

const projectBoxComponent = (projectTitle) => {
    let count = 0;
    return () => {
        count++;
        let div = document.createElement('div');
        div.setAttribute('id', 'box-' + count);
        div.classList.add('project-box');
        div.classList.add('animate__animated');
        div.classList.add('animate__fadeInDown');
        let h3 = document.createElement('h3');
        h3.setAttribute('id', 'title-' + count);
        h3.classList.add('project-box-title');
        h3.innerHTML = projectTitle + ' ' + count;
        div.addEventListener('animationend', () => {
            div.classList.remove('animate__animated');
            div.classList.remove('animate__fadeInDown');
            console.log('work');
        })
        div.appendChild(h3);
        return div;
    }
}

const projectBoxAddComponent = () => {
    let div = document.createElement('div');
    div.setAttribute('id', 'project-box-add');
    div.classList.add('project-box');

    let img = document.createElement('img');
    img.setAttribute('id', 'add-new');
    img.setAttribute('src', './assets/material-icon-add.svg');
    img.setAttribute('alt', 'add_project');

    div.appendChild(img);
    return div;
}

export { projectBoxComponent, projectBoxAddComponent }