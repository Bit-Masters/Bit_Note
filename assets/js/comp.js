function cardList(data, parentID) {
    const newElm = document.createElement('div');

    newElm.className = 'TaskContainer'; 

    const titleElm = document.createElement('span');
    const cntElm = document.createElement('span');

    if (data.title) {
        titleElm.innerHTML = data.title;
    } else if (data.content) {
        if (data.content.length > 6) {
            titleElm.innerHTML = data.content.slice(0, 6) + '...';
        } else {
            titleElm.innerHTML = data.content;
        }
    }

    if (data.content) {
        cntElm.innerHTML = data.content;
    }

    newElm.appendChild(titleElm);
    newElm.appendChild(cntElm);

    const parentElm = document.getElementById(parentID);

    if (parentElm) {
        parentElm.appendChild(newElm);
    } else {
        console.error(`Parent element with id "${parentID}" not found.`);
    }
}
