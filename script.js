function eventDrag(value){
    const target = value.currentTarget.lastElementChild

    if(target === value.target){
        width = value.target.clientWidth
        value.dataTransfer.setData("Text", value.target.id);
    }
}
function eventDragOver(value){
    value.preventDefault();
    
}
function drop(value){
    value.preventDefault();

    if(value.target.lastElementChild === null && value.target.className == "torre"){
        let data = value.dataTransfer.getData("Text")
        value.target.appendChild(document.getElementById(data)); 
    }
    else if ( value.target.className == "torre") {
        
        let width = value.target.lastElementChild.clientWidth
        let data = value.dataTransfer.getData("Text")
        let upWidth = document.getElementById(data)

        if(upWidth.clientWidth < width){
            value.target.appendChild(document.getElementById(data));
        }
    }
}

const torre1 = document.getElementById("torre1")
const torre2 = document.getElementById("torre2")
const torre3 = document.getElementById("torre3")

torre1.addEventListener("dragstart", eventDrag)
torre2.addEventListener("dragstart", eventDrag)
torre3.addEventListener("dragstart", eventDrag)

document.addEventListener("dragover", eventDragOver)
document.addEventListener("drop", drop)
  