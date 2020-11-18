const mainDiv = () => {
    let div = document.createElement('div');
    div.setAttribute('id', 'nav');
    return { div };
}

const unorderedList = (projectTitle = 'my project') => {
    let ul = document.createElement('ul');
    for (let index = 0; index < 3; index++) {
        let li = document.createElement('li');
        if (index === 0) {
            let a = document.createElement('a');
            a.setAttribute('id', 'nav-logo');
            a.setAttribute('href', '#');
            a.innerHTML = 'todo-js';
            li.appendChild(a);
        } else if (index === 1) {
            let div = document.createElement('div');
            div.setAttribute('id', 'nav-separator');
            div.classList.add('separator');
            li.appendChild(div);
        } else if (index === 2) {
            let a = document.createElement('a');
            a.setAttribute('id', 'nav-project-title');
            a.setAttribute('href', '#');
            a.innerHTML = projectTitle;
            li.appendChild(a);
        }
        ul.appendChild(li);
    }
    return { ul };
}

let navigation = () => {

    return (projectTitle) => {
        let main = mainDiv().div;
        let ul = unorderedList(projectTitle).ul;
        main.appendChild(ul);
        return main;
    }
}

export { navigation };