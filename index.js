// const reply_click = (id) => {
//     document.getElementById(id).remove();
// }
// //
// // const clickMe = () => {
// //     const doc = document.getElementById('test-div')
// //     const p = document.createElement('p');
// //     p.id = Date.now().toString();
// //     p.addEventListener('click', () => reply_click(p.id));
// //     const node = document.createTextNode(Date.now().toString());
// //     p.appendChild(node)
// //     doc.appendChild(p)
// // }
window.addEventListener("load", function(event) {
const acc = document.getElementsByClassName("accordion");
    console.log(acc.length);
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
});

