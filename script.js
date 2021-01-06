let butn=document.getElementById("pl");
let text=document.getElementById("add");
add();


butn.addEventListener("click",(e)=>
{
click();
});
function click()
{let notes=localStorage.getItem("notes");
let addtext=document.getElementById("addtext");

if(notes==null)
{
    notesobj=[];
}
else{
    notesobj=JSON.parse(notes);
}
notesobj.push(addtext.value);
localStorage.setItem("notes",JSON.stringify(notesobj));
addtext.value="";

add();}

function add()
{
    let notes=localStorage.getItem("notes");

if(notes==null)
{
    notesobj=[];
}
else{
    notesobj=JSON.parse(notes);
}
    let html="";
notesobj.forEach((element,index) => {
    html+=`
   
    <div class="notes-new">  
    <div class="tools">
    
    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary"><i class="fas fa-trash-alt"></i></button>
        </div>
        <textarea class="text" id="text">${element}</textarea>
        
        
  </div>
   

    `
});
 let notescopy=document.getElementById("notescopy");
 if(notesobj.length!=0)
 {notescopy.innerHTML=html;}
 if(notesobj.length==0)
 {notescopy.innerHTML=`<h2 class="header">You dont have any notes to show!!</h2>`;}

}

      






// Function to delete a note
// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      
        notesObj.splice(index, 1); 
      
    

      localStorage.setItem("notes", JSON.stringify(notesObj));
      add();
    }