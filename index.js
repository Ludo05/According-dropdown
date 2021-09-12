
let payload = []

const remove_button = (id) => {
    document.getElementById(id).remove();
}

function dropdownDisplay() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

const clickMe = () => {
    const doc = document.getElementById('test-div')
    const p = document.createElement('p');
    p.addEventListener('click', () => remove_button(p.id));
    const node = document.createTextNode(Date.now().toString());
    p.appendChild(node)
    doc.appendChild(p)
}

const addChild = () => {
    //Child name for title
    let child = 2;
    let container = document.createElement('div')
    const doc = document.getElementById('form-container');
    let childButton = document.createElement('button')
    let div = document.createElement('div')
    container.id = Date.now().toString()
    let m = document.createElement('p')
    m.innerHTML = 'x';
    m.setAttribute('class', 'cross-button')
    m.addEventListener('click', () => remove_button(container.id))
    childButton.innerText = 'Child 2'
    childButton.addEventListener('click', dropdownDisplay)
    childButton.classList.toggle('accordion')
    div.classList.toggle('custom-class')
    doc.appendChild(container)
    container.appendChild(childButton)
    container.appendChild(div)
    div.appendChild(m)

    child++;
}

const getValue = () => {
    var select = document.getElementById('favColour');
    var value = select.options[select.selectedIndex].value;

    document.getElementById('favColourText').innerText = value;

    payload.push(value)

    console.log(payload)
}


window.addEventListener("load", function(event) {
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", dropdownDisplay)
}
});
