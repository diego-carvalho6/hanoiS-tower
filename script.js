// function drag(event){
    

//     event.dataTransfer.setData("Text", event.target.id);
//     // const lastChild = target.currentTarget
    
//     // lastChild.lastElementChild.dataTransfer.setData("text", disk.target.id)
    
//  }
// function drop(event){
    
//  event.preventDefault();
//   var data = event.dataTransfer.getData("Text");
//   event.target.appendChild(document.getElementById(data));
  
// }



// })

// let disk1 = document.getElementById("disk1")
// document.addEventListener("dragstart", function(event) {
//     // The dataTransfer.setData() method sets the data type and the value of the dragged data
//     event.dataTransfer.setData("Text", event.target.id);

//     // Change the opacity of the draggable element
//     event.target.style.opacity = "0.4";
//   });

// let torre2 = document.getElementById("torre2")
// torre2.addEventListener("dragstart", function(event){
//     event.dataTransfer.setData("")
// })
// torre2.addEventListener("drop", drop)


function upFirst(value){
    const firstElement = document.getElementById("torre1")
}
function eventDrag(value){
    console.log(value.target)
   
    const target = value.currentTarget.lastElementChild
    console.log(value.target.clientWidth)
    

    if(target === value.target){
        let count = value.target.clientWidth
        value.dataTransfer.setData("Text", value.target.id);
        console.log(count)
    }
}
function eventDragOver(value){
    value.preventDefault();
    
}
function drop(value){
    value.preventDefault();
    let count = value.target.clientWidth
    console.log(count)
    if ( value.target.className == "torre hanoi1" ) {
        var data = value.dataTransfer.getData("Text");
        value.target.appendChild(document.getElementById(data));
      }
    if ( value.target.className == "torre hanoi2" ) {
      var data = value.dataTransfer.getData("Text");
      value.target.appendChild(document.getElementById(data));
    }
    if ( value.target.className == "torre hanoi3" ) {
        var data = value.dataTransfer.getData("Text");
        value.target.appendChild(document.getElementById(data));
    }
}
function disk(){
    
}

const torre1 = document.getElementById("torre1")
const torre2 = document.getElementById("torre2")
const torre3 = document.getElementById("torre3")
const hanoi = document.getElementById("hanoi")


torre1.addEventListener("dragstart", eventDrag)
torre2.addEventListener("dragstart", eventDrag)
torre3.addEventListener("dragstart", eventDrag)

document.addEventListener("dragover", eventDragOver)
document.addEventListener("drop", drop)
  