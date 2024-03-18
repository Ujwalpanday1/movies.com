const fp=document.querySelector("#container1")
const sBox=document.querySelector("#sBox")
const apiKey="76f8f9c9";
let mName=""
fp.addEventListener("click",()=>{
    console.log("hey");
    
})
sBox.addEventListener("keyup",()=>{
    console.log(sBox.value)
    mName=sBox.value;
    getM().then((d)=>{
       document.querySelector(".searchC").style.display="flex"
       document.querySelector("#container1").style.display="none"
       document.querySelector("#container2").style.display="none"
       document.querySelector(".searchC").innerHTML=`    <div class="details">

       </div>
<div class="poster">
<img src="${d.Poster}">
</div>`

    })
    .catch(()=>{
        console.log("error fetching the data")
    })
})
async function getM(){
const p1=await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${mName}`)
const data=await p1.json();
return data;
}