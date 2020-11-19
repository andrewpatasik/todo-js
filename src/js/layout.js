const layout = (idAttr) => {
    let div = document.createElement('div');
    div.setAttribute('id', idAttr);
    div.classList.add('layout');
    return { div };
}

export { layout }
