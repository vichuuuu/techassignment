const draggables=document.querySelectorAll(".draggable")

draggables.forEach(draggable =>{
    draggable.addEventListener("dragstart", () =>{
        console.log("drag start")
    })
})