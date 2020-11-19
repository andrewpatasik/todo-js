const projectContainerComponent = (idAttr) => {
    let div = document.createElement('div');
    div.setAttribute('id', idAttr);
    div.classList.add('project-container');
    return { div };
}

export { projectContainerComponent };
