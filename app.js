const showbtn=document.getElementById("showbtn");
const modal=document.getElementById("modal");
const closebtn=document.getElementById("btnclose");
const overlay=document.getElementById("overlay");


showbtn.addEventListener('click',()=>{
    console.log("showbtn clicked");
      modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
}
)
closebtn.addEventListener('click',()=>
{
    console.log("closebtn clicked");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})