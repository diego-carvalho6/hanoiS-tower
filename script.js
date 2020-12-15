const torre1 = document.getElementById("torre1")
const torre2 = document.getElementById("torre2")
const torre3 = document.getElementById("torre3")
const contador = [0]

function eventDrag(value) {
    const target = value.currentTarget.lastElementChild

    if (target === value.target) {
        width = value.target.clientWidth
        value.dataTransfer.setData("Text", value.target.id);
    }
}
function eventDragOver(value) {
    value.preventDefault();

}
function drop(value) {
    value.preventDefault();

    if (value.target.lastElementChild === null && value.target.className == "torre") {
        let data = value.dataTransfer.getData("Text")
        value.target.appendChild(document.getElementById(data));
    }
    else if (value.target.className == "torre") {

        let width = value.target.lastElementChild.clientWidth
        let data = value.dataTransfer.getData("Text")
        let upWidth = document.getElementById(data)

        if (upWidth.clientWidth < width) {
            value.target.appendChild(document.getElementById(data));
        }
    }
    if (torre1.childElementCount === 4) {
        alert("Parabés, você Ganhou!");
    }
    if (torre2.childElementCount === 4) {
        alert("Parabés, você Ganhou!");
    }
    if (torre3.childElementCount === 4) {
        alert("Parabés, você Ganhou!");
    }
}
function count(value) {
    let hanoi = document.getElementById("jogadas")
    contador[0] += 1
    jogadas.innerText = contador[0]
}

torre1.addEventListener("dragstart", eventDrag)
torre2.addEventListener("dragstart", eventDrag)
torre3.addEventListener("dragstart", eventDrag)

document.addEventListener("dragover", eventDragOver)
document.addEventListener("drop", drop)
document.addEventListener("drop", count)

function restart() {
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);

}