const text = document.querySelector('#text');
const button = document.querySelector('#add');
const item = document.querySelector('#item');

button.addEventListener('click', function(){
    const head = document.createElement('li');
    head.classList.add("newItem");
    item.appendChild(head);

    const b = document.createElement('button');
    b.classList.add("button1");
    head.appendChild(b);

    const cross = document.createElement('span');
    cross.innerText = 'X';
    b.appendChild(cross);

    const c = document.createElement('button');
    c.classList.add("button2");
    head.appendChild(c);

    const up = document.createElement('span');
    up.innerText='↑';
    c.appendChild(up);

    const d = document.createElement('button');
    d.classList.add("button3");
    head.appendChild(d);

    const down=document.createElement('span');
    down.innerText='↓';
    d.appendChild(down);

    const data = document.createElement('span');
    data.classList.add("input1");
    data.innerText = text.value;
    head.appendChild(data);
    text.value='';

    b.addEventListener('click', function(){
        head.remove();
    })
    c.addEventListener('click', function(){
        if(head.previousElementSibling){
            head.parentNode.insertBefore(head,head.previousElementSibling);
        }
    })
    d.addEventListener('click',function(){
        if(head.nextElementSibling){
            head.parentNode.insertBefore(head.nextElementSibling,head);
        }
    })

})